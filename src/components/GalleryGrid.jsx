import { useCallback, useEffect, useState } from "react";
import FadeImage from "./FadeImage";
import "./GalleryGrid.css";

export default function GalleryGrid({ images, limit }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const visible = limit ? images.slice(0, limit) : images;
  const hasActive = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length]
  );
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + visible.length) % visible.length)),
    [visible.length]
  );

  useEffect(() => {
    if (!hasActive) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [hasActive, close, next, prev]);

  const active = hasActive ? visible[activeIndex] : null;

  return (
    <>
      <div className="gallery-grid">
        {visible.map((image, index) => (
          <button
            className={`gallery-item gallery-item-${index % 6}`}
            key={`${image.src}-${index}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Open photograph ${index + 1}`}
          >
            <FadeImage
              src={image.src}
              alt={image.title || "Photography"}
              loading={index < 4 ? "eager" : "lazy"}
            />
            <span className="gallery-overlay">
              <span>View</span>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox-close" aria-label="Close" onClick={close}>×</button>

          <button
            className="lightbox-nav lightbox-prev"
            aria-label="Previous photograph"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>

          <img
            key={active.src}
            className="lightbox-image"
            src={active.src}
            alt={active.title || "Photography"}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-nav lightbox-next"
            aria-label="Next photograph"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>

          <span className="lightbox-count">{activeIndex + 1} / {visible.length}</span>
        </div>
      )}
    </>
  );
}
