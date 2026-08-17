import "./SectionTitle.css";
export default function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-title ${light ? "section-title-light" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
