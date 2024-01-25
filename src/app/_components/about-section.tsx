import Image from "next/image";

function AboutSection() {
  return (
    <section className="container max-w-[64rem] gap-4 lg:py-24 md:pt-12">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto_1fr]">
        <div className="max-w-xs px-2.5 lg:max-w-none">
        <Image 
        src='/avataaars.png'
        alt="avatars" 
        width={800}
        height={800}
        priority={true}
        className="aspect-square rotate-3 rounded-md object-cover bg-zinc-100 dark:bg-zinc-800"
        />
        </div>
      </div>

    </section>
  )
}

export default AboutSection