import { useState } from "react";

export default function FadeImage({ src, alt, loading, className = "", style }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      style={style}
      className={`fade-img ${loaded ? "is-loaded" : ""} ${className}`.trim()}
      onLoad={() => setLoaded(true)}
    />
  );
}
