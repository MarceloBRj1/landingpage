import IntroSection from "./_components/intro-section";
import AboutSection from "./_components/about-section";
export default function Home() {
  return (
    <main>
      <IntroSection />
      <AboutSection />

      <section id="about">
        <h1 className="text-primary">About</h1>
      </section>
      <section id="stack">
        <h1 className="text-primary">Stacks</h1>
      </section>
      <section id="investimento">
        <h1 className="text-primary">Investimento</h1>
      </section>
      <section id="faq">
        <h1 className="text-primary">Faq</h1>
      </section>
    </main>
  );
}
