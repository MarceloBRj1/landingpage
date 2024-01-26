"use client";
import Image from "next/image";
import Link from "next/link";
import {InstagramIcon,  GitHubIcon, LinkedInIcon} from "@/components/social-icons"

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className='group -m-1 p-1' {...props}>
      <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
    </Link>
  );
}

function AboutSection() {
  return (
    <section className="container max-w-[64rem] gap-4 lg:py-24 md:pt-12">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto_1fr]">
        <div className="flex justify-center lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
          <Image 
          src='/gojo.jpg'
          alt="avatars" 
          width={800}
          height={800}
          priority={true}
          className="aspect-square rotate-3 rounded-md object-cover bg-zinc-100 dark:bg-zinc-800"
          />
          </div>
        </div>
            <div className="lg:order-first">
              <h1 className="text-center mb-10 md:text-4xl lg:text-5xl font-bold">@marcelo_brj</h1>
              <p className="mt-6 text-base text-muted-foreground">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, ducimus fuga ullam dolore labore est voluptas, expedita illum similique hic possimus nesciunt minus itaque eius, ad ex quaerat rerum tempora minima aspernatur consequuntur! Perferendis natus iusto possimus veniam voluptatem quibusdam! Eum deleniti alias tempore natus laudantium eos consectetur nam recusandae!</p>
            </div>
            <div className="mt-6 flex justify-center md:justify-start gap-6">
             <SocialLink target="_blank" icon={GitHubIcon} href="https://github.com/MarceloBRj1" />
             <SocialLink target="_blank" icon={LinkedInIcon} href="https://www.linkedin.com/in/marcelobarreira-dev/" />
             <SocialLink target="_blank" icon={InstagramIcon} href="https://www.instagram.com/marcelo_brj/" />
            </div>
      </div>

    </section>
  )
}

export default AboutSection