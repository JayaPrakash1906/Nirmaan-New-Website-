import React, { useEffect } from "react";
import useNirmaanNews from "../hooks/useNirmaanNews";
import { mergeItems } from "../lib/nirmaanNews";
import NewsCard from "./NewsCard";
import { prefetchNewsImages } from "../lib/fetchWebImage";
import { CURATED_NIRMAAN_NEWS, LINKEDIN_COVERAGE } from "../data/cohortNews";

/**
 * Live Google News feed (Nirmaan, SIE, cohort startups) with curated fallback.
 */
export default function NirmaanNewsFeed({
  limit,
  title = "Latest news",
  intro,
  showViewAll = false,
  showThumbnails = true,
}) {
  const { items: liveNews, loading, error } = useNirmaanNews(limit);
  const fallback = mergeItems([CURATED_NIRMAAN_NEWS, LINKEDIN_COVERAGE]);
  const display = liveNews.length > 0 ? liveNews : error || !loading ? fallback : [];
  const shown = limit ? display.slice(0, limit) : display;

  useEffect(() => {
    if (loading || shown.length === 0) return;
    prefetchNewsImages(shown);
  }, [loading, shown.length, limit, error]);

  return (
    <section className="space-y-4">
      <div className="text-center sm:text-left">
        <h2 className="heading-section text-xl sm:text-2xl">{title}</h2>
        {intro ? <p className="text-sm text-gray-600 mt-2 max-w-3xl">{intro}</p> : null}
      </div>

      {loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="pro-card animate-pulse space-y-3" aria-hidden="true">
              <div className="h-3 bg-gray-200 rounded w-1/3" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          ))}
        </div>
      )}

      {!loading && shown.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shown.map((item) => (
            <NewsCard key={item.link || item.title} item={item} showThumbnail={showThumbnails} />
          ))}
        </div>
      )}

      {!loading && shown.length === 0 && (
        <p className="text-sm text-gray-600 text-center py-6">No matching headlines right now. Please check back soon.</p>
      )}

      {error && liveNews.length === 0 && (
        <p className="text-xs text-amber-700 text-center">Live search is temporarily unavailable — showing saved highlights.</p>
      )}

      {showViewAll && (
        <div className="text-center pt-2">
          <a href="/media" className="text-green-800 font-semibold text-sm hover:underline">
            All media &amp; outreach →
          </a>
        </div>
      )}
    </section>
  );
}