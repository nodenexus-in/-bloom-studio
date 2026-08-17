import SectionTitle from "../components/SectionTitle";
import FadeImage from "../components/FadeImage";
import Reveal from "../components/Reveal";
import "./About.css";

export default function About() {
  return <div className="about-page">
    <section className="page-hero"><span className="eyebrow">About the studio</span><h1>Photographs with<br /><em>a little more warmth.</em></h1></section>

    <Reveal as="section" className="section about-page-intro">
      <div className="large-copy"><span className="eyebrow">Our philosophy</span><h2>The best photographs<br />feel <em>unhurried.</em></h2></div>
      <div><p>Bloom Studio was built around one belief — that the months before a baby arrives, and the years just after, deserve to be photographed with real care, not rushed through.</p><p>Whether it's a maternity glow, a newborn's first nap, or a toddler mid-giggle, we slow down, get to know you, and create a space where the moment can simply happen.</p></div>
    </Reveal>

    <section className="section about-feature">
      <Reveal as="div" className="about-feature-image">
        <FadeImage src="/images/gallery/maternity/12.jpg" alt="Maternity photography at Bloom Studio" loading="lazy" />
      </Reveal>
      <Reveal as="div" delay={120} className="about-feature-copy">
        <span className="eyebrow">The way we work</span><h2>Comfortable sets. <em>Patient direction.</em> Real expressions.</h2><p>From your first enquiry to the final gallery, our team keeps every session relaxed, gentle and personal, especially with little ones and growing bumps in the room.</p>
      </Reveal>
    </section>

    <Reveal as="section" className="section values">
      <SectionTitle eyebrow="What matters to us" title="Three things we never compromise on." />
      <div className="values-grid">
        <Reveal as="article" delay={0}><span>01</span><h3>Comfort</h3><p>A calm, welcoming studio, especially important for expecting mothers and newborns.</p></Reveal>
        <Reveal as="article" delay={90}><span>02</span><h3>Detail</h3><p>Thoughtfully styled sets, props and light for every stage of your family's story.</p></Reveal>
        <Reveal as="article" delay={180}><span>03</span><h3>Timelessness</h3><p>Photographs designed to feel just as special ten years from now.</p></Reveal>
      </div>
    </Reveal>
  </div>;
}
