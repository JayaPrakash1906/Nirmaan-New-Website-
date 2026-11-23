import React from "react";

/**
 * Circular mentor portrait — crop tuned for clear faces (matches New Nirmaan Website).
 */
const MentorPhoto = ({ src, alt, faceFocus = false, className = "" }) => (
  <div className={`mentor-photo ${className}`.trim()}>
    <img
      src={src}
      alt={alt}
      className={faceFocus ? "photo-prabhu" : "photo-face"}
      loading="lazy"
      decoding="async"
    />
  </div>
);

export default MentorPhoto;