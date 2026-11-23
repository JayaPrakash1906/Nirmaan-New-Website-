import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FEATURED_MEDIA_ARCHIVE } from "../data/featuredMediaArchive";

const btnClass =
  "inline-flex items-center gap-1 bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-800";

export default function MediaArchiveGrid() {
  return (
    <section className="space-y-5">
      <div>
        <h2 className="heading-section text-xl sm:text-2xl">Featured highlights</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURED_MEDIA_ARCHIVE.map((item) => (
          <article key={item.title} className="pro-card flex flex-col pb-2">
            <img src={item.image} alt="" className="media-thumb" loading="lazy" />
            <h3 className="font-semibold text-sm sm:text-md text-gray-900 mt-3 px-1">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-1 px-1">Updated: {item.date}</p>
            <div className="text-center mt-auto pt-3">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className={btnClass}>
                  View more <FaExternalLinkAlt size={12} />
                </a>
              ) : (
                <span className={`${btnClass} opacity-50 cursor-default`}>View more</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}