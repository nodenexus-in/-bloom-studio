import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import { galleryCategories } from "../data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    ["/", "Home"],
    ["/about", "About"],
    ["/services", "Services"],
    ["/gallery", "Gallery"],
    ["/contact", "Contact"]
  ];

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-open" : ""} ${!isHome ? "on-light-page" : ""}`}>
      <Link to="/" className="brand" aria-label="Bloom Studio home">
        <img className="brand-logo" src="/images/logo/bloom-logo.png" alt="Bloom Studio logo" />
        <span className="brand-text">
          <span className="brand-text-line">BLOOM</span>
          <span className="brand-text-line">STUDIO</span>
        </span>
      </Link>

      <nav className="desktop-nav">
        {nav.map(([path, label]) => path === "/gallery" ? (
          <div className="nav-gallery" key={path}>
            <NavLink to={path}>Gallery</NavLink>
            <div className="gallery-dropdown">
              {galleryCategories.map((item) => <NavLink key={item.slug} to={`/gallery/${item.slug}`}>{item.name}</NavLink>)}
            </div>
          </div>
        ) : (
          <NavLink key={path} to={path} end={path === "/"}>{label}</NavLink>
        ))}
      </nav>

      <Link className="header-cta" to="/contact">Book a Session</Link>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span />
        <span />
      </button>

      <nav className={`mobile-nav ${open ? "is-open" : ""}`} aria-hidden={!open}>
        {nav.map(([path, label], i) => path === "/gallery" ? (
          <div className="mobile-gallery-group" key={path}>
            <NavLink to="/gallery" style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }} tabIndex={open ? 0 : -1}>Gallery</NavLink>
            <div className="mobile-gallery-links">{galleryCategories.map((item, j) => <NavLink key={item.slug} to={`/gallery/${item.slug}`} style={{ transitionDelay: open ? `${(i + j + 1) * 35}ms` : "0ms" }} tabIndex={open ? 0 : -1}>{item.name}</NavLink>)}</div>
          </div>
        ) : (
          <NavLink key={path} to={path} end={path === "/"} style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }} tabIndex={open ? 0 : -1}>{label}</NavLink>
        ))}
        <Link
          to="/contact"
          className="mobile-book"
          style={{ transitionDelay: open ? `${nav.length * 45}ms` : "0ms" }}
          tabIndex={open ? 0 : -1}
        >
          Book a Session
        </Link>
      </nav>
    </header>
  );
}
