import { 
  Accordion, 
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AccordionHeader } from "@radix-ui/react-accordion"


function FaqSection() {
  return (
      <section id="faq"
      className="bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24">
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          FAQ
        </h2>
      </div>
        <div className="mx-auto text-center md:max-w-[50rem]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Aceitam boletos?
            </AccordionTrigger>
            <AccordionContent>
              1000reais. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam esse dolorum nihil harum animi labore accusamus nesciunt fugit eos praesentium?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus dicta fugit, minus quas cum at eius labore dignissimos consectetur error!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Item 3</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus dicta fugit, minus quas cum at eius labore dignissimos consectetur error!
            </AccordionContent>
          </AccordionItem> <AccordionItem value="item-4">
            <AccordionTrigger>Item 4</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus dicta fugit, minus quas cum at eius labore dignissimos consectetur error!
            </AccordionContent>
          </AccordionItem>
        </Accordion>    

        </div>
      </section>
  )
}

export default FaqSection