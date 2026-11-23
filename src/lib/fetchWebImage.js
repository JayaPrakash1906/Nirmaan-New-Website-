const CACHE_KEY = "nirmaan_news_images_v1";
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return {};
    const { savedAt, map } = JSON.parse(raw);
    if (Date.now() - savedAt > CACHE_TTL_MS) return {};
    return map || {};
  } catch {
    return {};
  }
}

function writeCache(map) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), map }));
  } catch {
    /* ignore quota */
  }
}

function cacheGet(key) {
  return readCache()[key];
}

function cacheSet(key, url) {
  if (!url) return;
  const map = readCache();
  map[key] = url;
  writeCache(map);
}

function withTimeout(ms, promise) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), ms)),
  ]);
}

async function tryMicrolink(pageUrl) {
  const res = await withTimeout(
    12000,
    fetch(
      `https://api.microlink.io?url=${encodeURIComponent(pageUrl)}&palette=false&video=false&audio=false`
    )
  );
  if (!res.ok) return null;
  const json = await res.json();
  const url = json?.data?.image?.url || json?.data?.logo?.url;
  return url && url.startsWith("http") ? url : null;
}

async function tryOgFromHtml(pageUrl) {
  const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(pageUrl)}`;
  const res = await withTimeout(12000, fetch(proxy));
  if (!res.ok) return null;
  const html = await res.text();
  const patterns = [
    /property=["']og:image(?::secure_url)?["'][^>]*content=["']([^"']+)["']/i,
    /content=["']([^"']+)["'][^>]*property=["']og:image(?::secure_url)?["']/i,
    /property=["']twitter:image(?::src)?["'][^>]*content=["']([^"']+)["']/i,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m?.[1]?.startsWith("http")) return m[1];
  }
  return null;
}

async function tryWikimedia(query) {
  const q = encodeURIComponent(`${query} IIT Madras`.slice(0, 120));
  const api = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${q}&gsrlimit=1&prop=pageimages&piprop=thumbnail&pithumbsize=480&format=json&origin=*`;
  const res = await withTimeout(10000, fetch(api));
  if (!res.ok) return null;
  const data = await res.json();
  const pages = data?.query?.pages;
  if (!pages) return null;
  const first = Object.values(pages)[0];
  return first?.thumbnail?.source || null;
}

/**
 * Resolve a preview image from the open web for a news item (not local assets).
 */
export async function fetchWebImageForNewsItem(item) {
  const key = item?.link || item?.title;
  if (!key) return null;

  const cached = cacheGet(key);
  if (cached) return cached;

  if (item?.image?.startsWith("http")) {
    cacheSet(key, item.image);
    return item.image;
  }

  const link = item?.link;
  if (link?.startsWith("http")) {
    for (const fn of [tryMicrolink, tryOgFromHtml]) {
      try {
        const url = await fn(link);
        if (url) {
          cacheSet(key, url);
          return url;
        }
      } catch {
        /* try next */
      }
    }
  }

  try {
    const wiki = await tryWikimedia(item?.title || "innovation startup");
    if (wiki) {
      cacheSet(key, wiki);
      return wiki;
    }
  } catch {
    /* no wiki hit */
  }

  return null;
}

/** Warm images for many items without blocking the UI thread (concurrency limited). */
export async function prefetchNewsImages(items, concurrency = 4) {
  const list = items.filter((i) => i?.link || i?.title);
  let i = 0;
  async function worker() {
    while (i < list.length) {
      const idx = i++;
      await fetchWebImageForNewsItem(list[idx]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, list.length) }, () => worker()));
}