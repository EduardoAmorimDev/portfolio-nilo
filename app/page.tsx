import product1 from '@/public/images/product_1.webp'
import product2 from '@/public/images/product_2.webp'
import product3 from '@/public/images/product_3.webp'
import product4 from '@/public/images/product_4.webp'
import product5 from '@/public/images/product_5.webp'
import product6 from '@/public/images/product_6.webp'
import { Link, Logo, MenuSquare, ProductCard } from './_components'
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
          <span className="!text-primary">Bem-vindo</span>
          <h1 className="text-5xl lg:text-[80px]">
            Projetando clareza para marcas modernas.
          </h1>
          <div className="to-red mt-2 h-[76px] w-full bg-gradient-to-r from-black" />
        </section>
        <section>
          <ProductCard
            alt="Produto 1"
            description="Projeto grupo mensh - branding"
            image={product1}
            locale="Brasil"
            title="Grupo Mensch"
          />
          <ProductCard
            alt="Produto 2"
            description="Projeto grupo mensh - branding"
            image={product2}
            locale="Brasil"
            title="Grupo Mensch"
          />
        </section>
        <section>
          <div className="gap-5 md:grid md:grid-cols-3">
            <div className="col-span-2">
              <ProductCard
                alt="Produto3"
                description="Projeto grupo mensh - branding"
                image={product3}
                locale="Brasil"
                title="Grupo Mensch"
                small
              />
            </div>
            <div>
              <ProductCard
                alt="Produto 4"
                description="Projeto grupo mensh - branding"
                image={product4}
                locale="Brasil"
                title="Grupo Mensch"
                small
              />
            </div>
          </div>
        </section>
        <section>
          <div className="gap-5 md:grid md:grid-cols-3">
            <div>
              <ProductCard
                alt="Produto5"
                description="Projeto grupo mensh - branding"
                image={product5}
                locale="Brasil"
                title="Grupo Mensch"
                small
              />
            </div>
            <div className="col-span-2">
              <ProductCard
                alt="Produto 6"
                description="Projeto grupo mensh - branding"
                image={product6}
                locale="Brasil"
                title="Grupo Mensch"
                small
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
