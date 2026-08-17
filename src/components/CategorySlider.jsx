import "./CategorySlider.css";

export default function CategorySlider({ images, title }) {
  if (!images?.length) return null;

  return (
    <div className="category-slider">
      <div className="category-slider-track">
        {images.map((image, i) => (
          <div
            className="category-slide"
            key={`${image.src}-${i}`}
            style={{
              animationDelay: `${i * 0.08}s`,
            }}
          >
            <img
              src={image.src}
              alt={`${title} photography`}
              loading="lazy"
            />
            <div className="category-slide-caption">
              {title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}