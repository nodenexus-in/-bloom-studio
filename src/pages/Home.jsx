import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import CategorySlider from "../components/CategorySlider";
import Reveal from "../components/Reveal";
import { featuredImages, services, galleryCategories, business } from "../data";
import "./Home.css";

const SLIDE_DURATION = 3000;

export default function Home() {
  const homeSlides = [
    {
      image: galleryCategories.find((c) => c.slug === "newborn")?.images[4]?.src,
      category: "Newborn",
      title: "Their First Days, Beautifully Kept",
    },
    {
      image: galleryCategories.find((c) => c.slug === "maternity")?.images[2]?.src,
      category: "Maternity",
      title: "The Beauty of Motherhood",
    },
    {
      image: galleryCategories.find((c) => c.slug === "toddlers")?.images[3]?.src,
      category: "Toddlers",
      title: "Little Faces, Big Personalities",
    },
    {
      image: galleryCategories.find((c) => c.slug === "family")?.images[5]?.src,
      category: "Family",
      title: "Your People, Your Story",
    },
  ].filter((slide) => slide.image);

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    if (homeSlides.length < 2) return;

    const timer = setInterval(() => {
      setHeroIndex((index) => (index + 1) % homeSlides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [homeSlides.length]);

  const hero = homeSlides[heroIndex] || homeSlides[0];

  return <div className="home-page">
    <section className="home-hero">
      {homeSlides.map((slide, i) => (
        <img
          key={slide.image}
          className={`home-hero-image ${i === heroIndex ? "is-active" : ""}`}
          src={slide.image}
          alt={slide.title}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="home-hero-shade" />
      <div className="home-hero-content">
        <span className="hero-kicker">{hero?.category || "Newborn • Maternity • Toddlers • Family"}</span>
        <h1>{hero?.title || "Moments, beautifully bloomed."}</h1>
        <p>Newborn, maternity, toddler and family photography in Salem. crafted with warmth, patience and a gentle eye.</p>
        <Link className="line-button light-button" to="/gallery">Explore our work <span>↗</span></Link>
      </div>
      {homeSlides.length > 0 && (
        <div className="hero-slide-meta">
          <span>{String(heroIndex + 1).padStart(2, "0")}</span>
          <i />
          <span>{String(homeSlides.length).padStart(2, "0")}</span>
        </div>
      )}
      <div className="hero-scroll">Scroll to explore <span>↓</span></div>
    </section>

    <Reveal as="section" className="home-section home-intro">
      <div className="intro-number">01</div>
      <div><span className="eyebrow">The studio</span><h2>We don't just take a photo.<br /><em>We capture how it felt.</em></h2></div>
      <p>Bloom Studio is a Salem-based photography studio devoted to life's tender chapters. the bump, the first breath, the wobbly first steps and everything in between.</p>
    </Reveal>

    <Reveal as="section" className="home-section home-services">
      <SectionTitle eyebrow="What we do" title="A session for every chapter." text="From the glow of pregnancy to the giggles of a growing family, every shoot is styled around you." />
      <div className="service-list">{services.map((service, i) => <Reveal as="div" delay={i * 60} className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><span className="service-arrow">↗</span></Reveal>)}</div>
    </Reveal>

    <Reveal as="section" className="home-section home-portfolio">
      <SectionTitle eyebrow="Selected work" title="A few moments we've loved." />
      <CategorySlider images={featuredImages} title="Featured moments" />
      <div className="portfolio-button"><Link className="line-button" to="/gallery">View full gallery <span>↗</span></Link></div>
    </Reveal>

    <section className="home-category-preview home-section">
      <SectionTitle eyebrow="Explore collections" title="Find your story." text="Every collection is organised around the memories we love to preserve." />
      <div className="home-category-grid">{galleryCategories.map((cat) => <Link key={cat.slug} to={`/gallery/${cat.slug}`} className="home-category-card"><img src={cat.images[0]?.src} alt={cat.name} /><span>{cat.name}</span><b>View collection ↗</b></Link>)}</div>
    </section>

    <section className="home-statement"><Reveal className="statement-inner"><span className="eyebrow">Rated {business.rating}★ on Google</span><h2>Your bump.<br /><em>Your baby.</em><br />Your family, bloomed.</h2><Link className="line-button light-button" to="/contact">Let's create together <span>↗</span></Link></Reveal></section>

    <Reveal as="section" className="home-testimonial home-section"><span className="eyebrow">Kind words</span><blockquote>"They made me feel so comfortable through my whole pregnancy shoot. The photos still make me emotional."</blockquote><span className="testimonial-name">— A Bloom Studio parent, Salem</span></Reveal>
    <Reveal as="section" className="home-contact"><span className="eyebrow">Expecting, or growing?</span><h2>Let's make something<br /><em>worth remembering.</em></h2><Link className="line-button light-button" to="/contact">Book your session <span>↗</span></Link></Reveal>
  </div>;
}
