import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
          <span>
            Entre para a turma e aprenda
          </span>
        </div>
        <h1 className="text-primary">Landing Page com Next e ShadCN</h1>
      </section>
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
