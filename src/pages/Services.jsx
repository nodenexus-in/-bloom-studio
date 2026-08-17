import { services } from "../data";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import "./Service.css";

export default function Services() {
  return <>
    <section className="page-hero"><span className="eyebrow">Services</span><h1>Choose the chapter<br /><em>you want to keep.</em></h1></section>
    <section className="section services-page">
      <SectionTitle eyebrow="Photography, styled around you" title="Made for every stage." text="Every session is tailored to the people, the bump, the baby, or the little one we're photographing." />
      <div className="service-list services-list-large">
        {services.map((s, i) => <Reveal as="article" delay={i * 50} className="service-row" key={s.number}>
          <span className="service-number">{s.number}</span><div><h3>{s.title}</h3><p>{s.text}</p></div><span className="service-arrow">↗</span>
        </Reveal>)}
      </div>
    </section>
    <Reveal as="section" className="services-statement"><div className="statement-inner"><span className="eyebrow">Themed & custom sets</span><h2>Have a theme in mind?<br /><em>We'll build the set around it.</em></h2></div></Reveal>
  </>;
}
