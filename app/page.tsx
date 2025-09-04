import Image from 'next/image'
import { Link, Logo, MenuSquare } from './_components'
import productOne from '@/public/images/product_one.webp'
import { HTMLAttributes } from 'react'

export default function Home() {
  return (
    <div className="m-auto max-w-[1440px] p-6">
      <header className="flex justify-end px-6 py-3">
        <MenuSquare />
        {/* <Logo />
        <div className="flex gap-8">
          <Link href="#teste123">Projetos</Link>
          <Link href="#teste123">Sobre mim</Link>
          <Link href="#teste123">Contato</Link>
          <Link href="#teste123">Produtos</Link>
        </div> */}
      </header>
      <main className="py-6">
        {/* <Image alt="produto 1" src={productOne} /> */}
      </main>
    </div>
  )
}
