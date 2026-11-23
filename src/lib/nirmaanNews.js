import axios from 'axios';
import {
  COHORT_NEWS_BRANDS,
  CURATED_NIRMAAN_NEWS,
  LINKEDIN_COVERAGE,
} from '../data/cohortNews';

const CORE_QUERIES = [
  'Nirmaan "IIT Madras"',
  '"School of Innovation and Entrepreneurship" "IIT Madras"',
  '"School of Innovation" Entrepreneurship "IIT Madras"',
  'Nirmaan "Demo Day" "IIT Madras"',
  'SIE Nirmaan "IIT Madras"',
  '"pre-incubator" Nirmaan OR SIE "IIT Madras"',
];

function brandQueryBatches(brands, size = 6) {
  const batches = [];
  for (let i = 0; i < brands.length; i += size) {
    const slice = brands.slice(i, i + size);
    const orPart = slice.map((b) => `"${b}"`).join(' OR ');
    batches.push(`(${orPart}) ("IIT Madras" OR IITM OR Nirmaan OR startup OR funding)`);
  }
  return batches.slice(0, 8);
}

const QUERIES = [...CORE_QUERIES, ...brandQueryBatches(COHORT_NEWS_BRANDS)];

const BRAND_RE = new RegExp(
  COHORT_NEWS_BRANDS.map((b) => b.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'),
  'i'
);

const CORE_RE =
  /nirmaan|school of innovation|\bsie\b|demo day|pre-?incubator|sudha\s*&\s*shankar|innovation hub/i;

const IITM_RE = /iit\s*madras|iitm/i;

const STOP = new Set([
  'the',
  'and',
  'for',
  'from',
  'with',
  'its',
  'into',
  'over',
  'first',
  'ever',
  'new',
  'has',
  'have',
  'been',
  'that',
  'this',
  'their',
  'about',
  'after',
  'under',
  'amid',
  'says',
  'how',
  'why',
  'what',
  'when',
  'who',
  'are',
  'was',
  'were',
  'will',
  'can',
  'our',
  'out',
  'via',
  'also',
  'more',
  'than',
  'into',
  'onto',
]);

/** Prefer one article per story so the same news doesn't repeat across outlets. */
const STORY_RULES = [
  { key: 'delta-expo', test: /delta\s*expo/i, need: /2026|cfi|nirmaan|sie|showcase|startup/i },
  { key: 'inbound-1m', test: /inbound\s*aerospace/i, need: /\$?\s*1\s*(million|mn|m\b)|₹?\s*8\.3|pre-?seed|funding|raises/i },
  { key: 'plenome-6.5', test: /plenome/i, need: /6\.5|₹\s*6|rs\.?\s*6\.5|65\s*crore|inr\s*65|seed|funding|raises/i },
  { key: 'galaxeye-drishti', test: /galaxeye|galaxy\s*eye/i, need: /drishti|optosar|satellite|launch/i },
  { key: 'nirmaan-demoday', test: /nirmaan/i, need: /demo\s*day/i },
  { key: 'sie-launch', test: /school of innovation|\bsie\b/i, need: /launch|launches|inaugurat|announc|new school/i },
  { key: 'modulus-housing', test: /modulus\s*housing/i, need: /iit|shelter|modular|forbes|entrepreneur/i },
  { key: 'doval-visit', test: /ajit\s*doval|nsa\s*doval|\bdoval\b/i, need: /iit|cfi|nirmaan|madras|visit|convocation/i },
  { key: 'zanzibar-ecell', test: /zanzibar/i, need: /nirmaan|e-?cell|iitm|webinar|innovation/i },
  { key: 'pitch-deck-2025', test: /pitch\s*deck/i, need: /nirmaan|ments|competition|2025/i },
  { key: 'special-cohort-25', test: /special\s*cohort|cohort\s*['’]?25/i, need: /nirmaan|application|apply/i },
  { key: 'feb-2026-cohort', test: /feb(ruary)?\s*2026|2026\s*cohort/i, need: /nirmaan|application|apply|cohort/i },
  { key: 'open-house-2025', test: /open\s*house/i, need: /2025|nirmaan|oie|hub|innovation/i },
  { key: 'nippo-visit', test: /nippo/i, need: /nirmaan|cfi|hub|visit/i },
  { key: 'krishaka-tud', test: /krishaka|tud\s*ip|summer\s*school/i, need: /nirmaan|dresden|sss|tud/i },
];

const SOURCE_RANK = [
  'the hindu',
  'hindu businessline',
  'economic times',
  'indian express',
  'iit madras',
  'cnbc',
  'careers360',
  'linkedin',
];

function googleNewsRssUrl(query) {
  const q = encodeURIComponent(query);
  return `https://news.google.com/rss/search?q=${q}&hl=en-IN&gl=IN&ceid=IN:en`;
}

function proxyCandidates(rssUrl) {
  const enc = encodeURIComponent(rssUrl);
  return [
    `https://api.allorigins.win/raw?url=${enc}`,
    `https://api.allorigins.win/get?url=${enc}`,
    `https://rss2json.com/api.json?rss_url=${enc}`,
  ];
}

function cleanTitle(title) {
  return (title || '')
    .replace(/\s+[-|–—]\s+(The Hindu|Economic Times|BusinessLine|Indian Express|DT Next|Free Press Journal|Careers360|CNBC-?TV18|LinkedIn|IIT Madras).*$/i, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeTitle(title) {
  return cleanTitle(title)
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function significantWords(title) {
  return normalizeTitle(title)
    .split(' ')
    .filter((w) => w.length > 2 && !STOP.has(w));
}

/** First ~8 significant words — catches near-duplicate headlines. */
function titleStem(title) {
  return significantWords(title).slice(0, 8).join(' ');
}

/** Jaccard overlap on title tokens — catches reworded same stories. */
function titleOverlap(a, b) {
  const wa = new Set(significantWords(a));
  const wb = new Set(significantWords(b));
  if (!wa.size || !wb.size) return 0;
  let inter = 0;
  for (const w of wa) if (wb.has(w)) inter += 1;
  return inter / (wa.size + wb.size - inter);
}

function storyKey(item) {
  const blob = `${item.title || ''} ${item.tag || ''} ${item.source || ''}`;
  for (const rule of STORY_RULES) {
    if (rule.test.test(blob) && rule.need.test(blob)) return rule.key;
  }
  return null;
}

function linkKey(link) {
  try {
    const u = new URL(link);
    const host = u.hostname.replace(/^www\./, '').toLowerCase();
    // Google News wrapper URLs differ per feed — treat host-only as weak; keep article path id when present
    if (host.includes('news.google.')) {
      const art = u.pathname.match(/\/articles\/([^/?#]+)/i);
      if (art) return `news.google/${art[1].slice(0, 48)}`;
      return `news.google/${normalizeTitle(link).slice(0, 40)}`;
    }
    return `${host}${u.pathname}`.toLowerCase().replace(/\/$/, '');
  } catch {
    return String(link || '')
      .split('?')[0]
      .split('&')[0]
      .toLowerCase();
  }
}

function sourceScore(source) {
  const s = (source || '').toLowerCase();
  const idx = SOURCE_RANK.findIndex((r) => s.includes(r));
  return idx === -1 ? 50 : idx;
}

function decodeXml(text) {
  return (text || '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function textBetween(block, tag) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const m = block.match(re);
  return m ? decodeXml(m[1]) : '';
}

function parseRssItems(xml) {
  if (!xml || typeof xml !== 'string') return [];
  const items = [];
  const itemBlocks = xml.match(/<item[\s\S]*?<\/item>/gi) || [];

  for (const block of itemBlocks) {
    let title = textBetween(block, 'title');
    const link = textBetween(block, 'link') || textBetween(block, 'guid');
    const pubDate = textBetween(block, 'pubDate');
    let source = textBetween(block, 'source');
    const description = textBetween(block, 'description');
    const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["']/i);
    let image = imgMatch ? imgMatch[1] : null;
    if (!image) {
      const enc = block.match(/<enclosure[^>]+url=["']([^"']+)["']/i);
      if (enc && /\.(jpg|jpeg|png|webp|gif)/i.test(enc[1])) image = enc[1];
    }
    if (!image) {
      const media = block.match(/<media:(?:content|thumbnail)[^>]+url=["']([^"']+)["']/i);
      if (media) image = media[1];
    }
    const dateObj = pubDate ? new Date(pubDate) : null;

    if (!source && title.includes(' - ')) {
      const parts = title.split(' - ');
      source = parts.pop().trim();
      title = parts.join(' - ').trim();
    }
    if (!source) source = 'Google News';
    title = cleanTitle(title);

    items.push({
      title,
      link,
      source,
      date: dateObj && !Number.isNaN(dateObj.getTime()) ? dateObj.toISOString() : null,
      image,
      curated: false,
    });
  }

  return items;
}

function parseProxyPayload(data) {
  if (!data) return [];
  if (typeof data === 'string') {
    if (data.includes('<item')) return parseRssItems(data);
    try {
      return parseProxyPayload(JSON.parse(data));
    } catch {
      return [];
    }
  }
  if (typeof data === 'object') {
    if (typeof data.contents === 'string') return parseRssItems(data.contents);
    if (Array.isArray(data.items)) {
      return data.items.map((it) => ({
        title: cleanTitle(it.title || ''),
        link: it.link || it.url || '',
        source: it.author || it.source || 'Google News',
        date: it.pubDate ? new Date(it.pubDate).toISOString() : null,
        image: it.thumbnail || it.enclosure?.link || null,
        curated: false,
      }));
    }
  }
  return [];
}

function isRelevant(item) {
  const blob = `${item.title || ''} ${item.source || ''}`;
  if (CORE_RE.test(blob)) return true;
  if (BRAND_RE.test(blob)) return true;
  if (IITM_RE.test(blob) && /innovat|entrepren|incub|startup|founder|pre-?incub/i.test(blob)) {
    return true;
  }
  return false;
}

async function fetchViaProxies(rssUrl) {
  let lastError;
  for (const url of proxyCandidates(rssUrl)) {
    try {
      const { data } = await axios.get(url, {
        timeout: 12000,
        transformResponse: [(d) => d],
      });
      const items = parseProxyPayload(data);
      if (items.length) return items;
    } catch (err) {
      lastError = err;
    }
  }
  if (lastError) throw lastError;
  return [];
}

async function fetchQuery(query) {
  return fetchViaProxies(googleNewsRssUrl(query));
}

function shouldReplace(existing, candidate) {
  const scoreDiff = sourceScore(candidate.source) - sourceScore(existing.source);
  if (scoreDiff !== 0) return scoreDiff < 0;
  if (candidate.curated && !existing.curated) return true;
  const da = existing.date ? new Date(existing.date).getTime() : 0;
  const db = candidate.date ? new Date(candidate.date).getTime() : 0;
  return db > da;
}

function findFuzzyDup(order, item) {
  const stem = titleStem(item.title);
  for (const existing of order) {
    if (titleOverlap(existing.title, item.title) >= 0.62) return existing;
    const estem = titleStem(existing.title);
    if (stem && estem && (stem.includes(estem) || estem.includes(stem))) return existing;
  }
  return null;
}

/**
 * Deduplicate by link, title, stem, story fingerprint, and fuzzy title overlap.
 * Same story appears at most once across outlets / LinkedIn / curated.
 */
export function mergeItems(lists) {
  const byLink = new Map();
  const byTitle = new Map();
  const byStem = new Map();
  const byStory = new Map();
  const order = [];

  function removeFromIndexes(item) {
    const lk = linkKey(item.link);
    const tk = normalizeTitle(item.title);
    const sk = titleStem(item.title);
    const story = storyKey(item);
    if (byLink.get(lk) === item) byLink.delete(lk);
    if (byTitle.get(tk) === item) byTitle.delete(tk);
    if (sk && byStem.get(sk) === item) byStem.delete(sk);
    if (story && byStory.get(story) === item) byStory.delete(story);
    const idx = order.indexOf(item);
    if (idx >= 0) order.splice(idx, 1);
  }

  function register(item) {
    byLink.set(linkKey(item.link), item);
    byTitle.set(normalizeTitle(item.title), item);
    const stem = titleStem(item.title);
    if (stem) byStem.set(stem, item);
    const story = storyKey(item);
    if (story) byStory.set(story, item);
    order.push(item);
  }

  for (const list of lists) {
    for (const raw of list) {
      if (!raw?.title || !raw?.link || raw.link === '#') continue;
      if (!raw.curated && !isRelevant(raw)) continue;

      const item = { ...raw, title: cleanTitle(raw.title) };
      const lk = linkKey(item.link);
      const tk = normalizeTitle(item.title);
      const stem = titleStem(item.title);
      const story = storyKey(item);

      const dup =
        byLink.get(lk) ||
        byTitle.get(tk) ||
        (stem && byStem.get(stem)) ||
        (story && byStory.get(story)) ||
        findFuzzyDup(order, item);

      if (dup) {
        if (shouldReplace(dup, item)) {
          removeFromIndexes(dup);
          register(item);
        }
        continue;
      }

      register(item);
    }
  }

  return order.slice().sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da;
  });
}

export async function fetchNirmaanNews() {
  const batches = await Promise.allSettled(QUERIES.map((q) => fetchQuery(q)));
  const liveLists = batches.filter((r) => r.status === 'fulfilled').map((r) => r.value);

  const live = mergeItems(liveLists);
  // Press first, then LinkedIn — mergeItems keeps one card per story
  const combined = mergeItems([live, CURATED_NIRMAAN_NEWS, LINKEDIN_COVERAGE]);
  return combined.slice(0, 18);
}

export function getLinkedInCoverage() {
  return LINKEDIN_COVERAGE;
}

export function formatNewsDate(iso) {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}
