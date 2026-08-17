import { Link } from "react-router-dom";
import { business } from "../data";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand">
            <img className="footer-logo" src="public/logo_footer.png" alt="Bloom Studio logo" />
            <span>Bloom Studio</span>
          </div>
          <p>Newborn, maternity, toddler & family photography<br />in Salem, Tamil Nadu.</p>
          <div className="footer-rating">
            <span className="footer-rating-star">★</span> {business.rating} on Google · {business.reviewCount} reviews
          </div>
        </div>

        <div className="footer-links">
          <div>
            <span className="footer-label">Explore</span>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
          <div>
            <span className="footer-label">Connect</span>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
            <a href={business.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </div>
          <div>
            <span className="footer-label">Visit</span>
            <a href={business.mapsUrl} target="_blank" rel="noreferrer">{business.addressShort}</a>
            <span className="footer-hours">{business.hoursNote}</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Bloom Studio</span>
        <span>Every bump, every baby, every bloom.</span>
      </div>
    </footer>
  );
}