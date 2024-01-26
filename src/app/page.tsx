import IntroSection from "./_components/intro-section";
import AboutSection from "./_components/about-section";
import TechSection from "./_components/tech-section";
import FaqSection from "./_components/faq-section";
export default function Home() {
  return (
    <main>
      <IntroSection />
      <AboutSection />
      <TechSection />

      <section id="valores">
        <h1 className="text-primary">Valores</h1>
      </section>
      
      <FaqSection />
    </main>
  );
}
