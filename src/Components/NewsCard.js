import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { formatNewsDate } from "../lib/nirmaanNews";
import { fetchWebImageForNewsItem } from "../lib/fetchWebImage";

export default function NewsCard({ item, showThumbnail = true }) {
  const [imageUrl, setImageUrl] = useState(item?.image?.startsWith("http") ? item.image : null);
  const [imageLoading, setImageLoading] = useState(showThumbnail && !imageUrl);

  useEffect(() => {
    if (!showThumbnail) return;
    let cancelled = false;

    async function load() {
      if (item?.image?.startsWith("http")) {
        setImageUrl(item.image);
        setImageLoading(false);
        return;
      }
      setImageLoading(true);
      try {
        const url = await fetchWebImageForNewsItem(item);
        if (!cancelled && url) setImageUrl(url);
      } finally {
        if (!cancelled) setImageLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [item, showThumbnail]);

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="pro-card flex flex-col gap-2 hover:border-green-300 hover:shadow-md transition-shadow group h-full overflow-hidden"
    >
      {showThumbnail && (
        <div className="!h-40 !mb-2 overflow-hidden rounded-lg border border-gray-100 bg-gray-100 relative">
          {imageLoading && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-green-50 to-gray-100" aria-hidden />
          )}
          {imageUrl ? (
            <img
              src={imageUrl}
              alt=""
              className="w-full h-full object-cover object-center relative z-[1]"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setImageUrl(null)}
            />
          ) : !imageLoading ? (
            <div className="flex h-full items-center justify-center px-3 text-center text-xs font-medium text-green-800/70">
              {item.tag || item.source || "Nirmaan coverage"}
            </div>
          ) : null}
        </div>
      )}
      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="font-semibold text-green-800">{item.tag || item.source || "News"}</span>
        {item.date && <span>{formatNewsDate(item.date)}</span>}
      </div>
      <h3 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug group-hover:text-green-800">
        {item.title}
      </h3>
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-green-700">
        Read more <FaExternalLinkAlt size={12} />
      </span>
    </a>
  );
}