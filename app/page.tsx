import Image from 'next/image'
import { Link, Logo, MenuSquare } from './_components'
import productOne from '@/public/images/product_one.webp'
import { HTMLAttributes } from 'react'
import { links } from './_data'

export default function Home() {
  return (
    <div className="m-auto max-w-[1440px]">
      <header className="relative flex items-center justify-between px-6 py-[18px]">
        <Logo />
        <MenuSquare />
        <div className="hidden gap-8 md:flex">
          {links.map(link => (
            <Link key={link} href={`#${link}`}>
              {link}
            </Link>
          ))}
        </div>
      </header>
      <main className="px-6 py-3">
        <section className="my-6 flex flex-col gap-4 md:gap-6">
          <span className="text-white">Bem-vindo</span>
          <h1 className="text-5xl text-white lg:text-[80px]">
            Projetando clareza para marcas modernas.
          </h1>
          <div className="to-red mt-2 h-[76px] w-full bg-gradient-to-r from-black" />
        </section>
        {/* <Image alt="produto 1" src={productOne} /> */}
      </main>
    </div>
  )
}
