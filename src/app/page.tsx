import IntroSection from "./_components/intro-section";
import AboutSection from "./_components/about-section";
import TechSection from "./_components/tech-section";
import FaqSection from "./_components/faq-section";
import InvestSection from "./_components/invest-section";
export default function Home() {
  return (
    <main>
      <IntroSection />
      <AboutSection />
      <TechSection />
      <InvestSection />
      <FaqSection />
    </main>
  );
}
