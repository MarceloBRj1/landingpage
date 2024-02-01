import { CheckCheck } from 'lucide-react'
import React from 'react'
import Enrollment from './matricula'
import PreEnrollment from './pre-matricula'

const InvestSection = () => {
  return (
    <section id='investimento' className='bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24'>
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h1 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>Investimento</h1>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          Faça o melhor investimento para a sua carreira <span className='animate-pulse text-green-400'>DEV</span> com os melhores preços do mercado. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, asperiores. 
        </p>
      </div> 

      <div className='grid w-full border rounded-lg items-start gap-10 p-10 md:grid-cols-[1fr_200px]'>
        <div className='grid gap-6 '>
          <h3 className='text-xl font-bold sm:text-2xl'>O que está incluido</h3>
            <ul className='grid gap-3 text-sm text-muted-foreground sm:grid-cols-2'>
              <li className='flex items center'>
                <CheckCheck className='mr-2 h-4 w-4' /> <span>Aulas gravadas para assistir a qualquer momento</span>
              </li>
              <li className='flex items center'>
                <CheckCheck className='mr-2 h-4 w-4' /> <span>Aulas ao vivo</span>
              </li>
              <li className='flex items center'>
                <CheckCheck className='mr-2 h-4 w-4' /> <span>Garantia de 1 mês</span>
              </li>
              <li className='flex items center'>
                <CheckCheck className='mr-2 h-4 w-4' /> <span>Acesso ao codigo fonte do projeto</span>
              </li>
              <li className='flex items center'>
                <CheckCheck className='mr-2 h-4 w-4' /> <span>Grupo no WhatsApp</span>
              </li>
              <li className='flex items center'>
                <CheckCheck className='mr-2 h-4 w-4' /> <span>Suporte via Discord</span>
              </li>
            </ul>
        </div>
        <div className='flex flex-col gap-4 text-center'>
          <div className='space-y-2'>
            <h4 className='font-bold'>
              12x <br />
              R$ <span className='text-6xl font-bold text-primary dark:text-violet-600'> 97,80</span>
            </h4>
            <h4 className='font-bold text-xl'>ou R$ 999,99 á vista</h4>
          </div>
          <PreEnrollment/>
          <Enrollment />
        </div>
      </div>
    </section>
  )
}

export default InvestSection