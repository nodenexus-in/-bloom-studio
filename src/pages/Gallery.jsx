import { Link, useParams } from "react-router-dom";
import CategorySlider from "../components/CategorySlider";
import { galleryCategories } from "../data";
import "./Gallery.css";

export default function Gallery() {
  const { category } = useParams();
  const selected = category ? galleryCategories.find((item) => item.slug === category) : null;
  const categories = selected ? [selected] : galleryCategories;

  return <>
    <section className="page-hero">
      <span className="eyebrow">Portfolio</span>
      <h1>{selected ? selected.name : "Every chapter,\nbeautifully framed."}</h1>
      <p className="gallery-hero-copy">Explore our photography by collection. Each one moves automatically every 3 seconds.</p>
    </section>

    <section className="gallery-page">
      <nav className="gallery-category-nav" aria-label="Gallery categories">
        <Link className={!category ? "active" : ""} to="/gallery">All</Link>
        {galleryCategories.map((item) => <Link key={item.slug} className={category === item.slug ? "active" : ""} to={`/gallery/${item.slug}`}>{item.name}</Link>)}
      </nav>

      <div className="gallery-category-sections">
        {categories.map((item) => (
          <section className="gallery-category" key={item.slug} id={item.slug}>
            <div className="gallery-category-heading">
              <div><span className="eyebrow">Collection</span><h2>{item.name}</h2></div>
              <span>{item.images.length} photographs</span>
            </div>
            <CategorySlider images={item.images} title={item.name} />
          </section>
        ))}
      </div>
    </section>
  </>;
}
