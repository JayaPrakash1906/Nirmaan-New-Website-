import { useEffect, useState } from 'react';
import { fetchNirmaanNews } from '../lib/nirmaanNews';

const CACHE_KEY = 'nirmaan_live_news_v8';
const CACHE_TTL_MS = 20 * 60 * 1000;

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.savedAt || !Array.isArray(parsed.items) || parsed.items.length === 0) {
      return null;
    }
    if (Date.now() - parsed.savedAt > CACHE_TTL_MS) return null;
    return parsed.items;
  } catch {
    return null;
  }
}

function writeCache(items) {
  if (!items?.length) return;
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), items }));
  } catch {
    /* ignore */
  }
}

export default function useNirmaanNews(limit) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const cached = readCache();
      if (cached) {
        if (!cancelled) {
          setItems(limit ? cached.slice(0, limit) : cached);
          setLoading(false);
          setError(null);
        }
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const news = await fetchNirmaanNews();
        if (cancelled) return;
        writeCache(news);
        const full = limit ? news.slice(0, limit) : news;
        setItems(full);
        if (!news.length) {
          setError('No matching coverage found right now.');
        }
      } catch (err) {
        if (cancelled) return;
        setError(err?.message || 'Unable to load live news right now.');
        setItems([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [limit]);

  return { items, loading, error };
}
