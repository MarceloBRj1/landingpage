import React from 'react'
import { ModeToggle } from './mode-toggle'
import { ArrowBigRight, ArrowRight } from 'lucide-react'

const IntroSection = () => {
  return (
    <section id="intro" className=" relative space-y-6 py-8 md:py-12 lg:py-32">
      <svg viewBox="0 0 1024 1024" className="absolute left-1/3 top-full md:left-1/2 md:top-1/2  -z-10 h-[16rem] w-[16rem] md:h-[54rem] md:w-[54rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
        <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
          <span className="rounded-2xl px-4 bg-muted py-1.5 text-sm font-medium flex items-center">
            Escolha o tema  <ArrowRight className='ml-2' />
          <ModeToggle  />
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl">
            The Next Dev <br />
            Front-end <span className="text-primary dark:text-violet-600">Next.js</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reprehenderit officiis beatae molestias fugiat, aspernatur esse, quidem nesciunt rem fugit laborum! Asperiores perspiciatis, maxime veritatis aut tenetur eligendi ullam reprehenderit.
          </p>
          <div className="space-x-4">
            <a href="#investimento" className=" bg-primary text-cyan-50 py-2 px-4 rounded-lg shadow-lg font-semibold dark:bg-violet-600 ">Contato</a>
            <a href="#stack" className=" btn btn-ghost py-2 px-4 bg-transparent rounded-full shadow-lg font-semibold">Saiba Mais</a>

          </div>
        </div>
      </section>
  )
}

export default IntroSection