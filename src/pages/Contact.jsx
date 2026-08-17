import { useState } from "react";
import Reveal from "../components/Reveal";
import { buildWhatsAppLink } from "../components/WhatsAppButton";
import { business } from "../data";
import "./Contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: ""
  });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    const lines = [
      `New enquiry from the website:`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.service ? `Interested in: ${form.service}` : null,
      form.details ? `Details: ${form.details}` : null
    ].filter(Boolean);

    window.open(buildWhatsAppLink(lines.join("\n")), "_blank", "noreferrer");
  };

  return <div className="contact-page">
    <section className="page-hero"><span className="eyebrow">Contact</span><h1>Let's create<br /><em>something beautiful.</em></h1></section>

    <section className="section contact-layout">
      <Reveal as="div" className="contact-info">
        <span className="eyebrow">Start a conversation</span><h2>Tell us about<br />your <em>story.</em></h2>
        <p>Share a few details and we'll get back to you with availability and the next steps.</p>
        <div className="contact-details">
          <div className="contact-detail"><span>Email</span><a href={`mailto:${business.email}`}>{business.email}</a></div>
          <div className="contact-detail"><span>Phone</span><a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a></div>
          <div className="contact-detail"><span>WhatsApp</span><a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">Chat with us</a></div>
          <div className="contact-detail"><span>Address</span><a href={business.mapsUrl} target="_blank" rel="noreferrer">{business.address}</a></div>
          <div className="contact-detail"><span>Hours</span><span className="contact-hours-value">{business.hoursNote}</span></div>
          <div className="contact-detail"><span>Instagram</span><a href={business.instagram} target="_blank" rel="noreferrer">@bloomstudio</a></div>
        </div>
      </Reveal>

      <Reveal as="form" delay={120} className="contact-form" onSubmit={handleSubmit}>
        <label>Name<input required placeholder="Your name" value={form.name} onChange={handleChange("name")} /></label>
        <label>Email<input type="email" required placeholder="you@example.com" value={form.email} onChange={handleChange("email")} /></label>
        <label>Phone<input placeholder="+91" value={form.phone} onChange={handleChange("phone")} /></label>
        <label>I'm interested in
          <select value={form.service} onChange={handleChange("service")}>
            <option value="" disabled>Select a service</option>
            <option>Newborn Photography</option>
            <option>Maternity Photoshoot</option>
            <option>Toddler Shoot</option>
            <option>Family Portraits</option>
          </select>
        </label>
        <label>Tell us a little more<textarea rows="5" placeholder="Due date, baby's age, theme ideas..." value={form.details} onChange={handleChange("details")} /></label>
        <button className="line-button form-button" disabled={sent}>{sent ? "Opening WhatsApp…" : "Send enquiry via WhatsApp"} <span>↗</span></button>
        {sent && <p className="form-success">Thanks! We opened WhatsApp with your details prefilled — just hit send there to reach us instantly.</p>}
      </Reveal>
    </section>
  </div>;
}
