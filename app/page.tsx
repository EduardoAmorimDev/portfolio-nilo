import product1 from '@/public/images/product_1.webp'
import product2 from '@/public/images/product_2.webp'
import product3 from '@/public/images/product_3.webp'
import product4 from '@/public/images/product_4.webp'
import product5 from '@/public/images/product_5.webp'
import product6 from '@/public/images/product_6.webp'
import product7 from '@/public/images/product_7.webp'
import product8 from '@/public/images/product_8.webp'
import { Link, Logo, MenuSquare, ProductCard, TextTitle } from './_components'
import { links } from './_data'
import { NumberProof } from './_components/number-proof'

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
        <section className="gap-5 md:grid md:grid-cols-3">
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
        </section>
        <section className="gap-5 md:grid md:grid-cols-3">
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
        </section>
        <section className="flex flex-col gap-10 pt-2.5 pb-5">
          <TextTitle title="Brasil - Florianópolis" text="Sobre mim" />
          <div className="flex flex-col gap-6">
            <p>
              Oi, sou o Guylherme Sarmento, iniciei minha carreira como Designer
              aos 21 anos e, desde então, venho acompanhando de perto minha
              própria evolução profissional. Desde jovem sempre fui um
              observador atento e crítico em relação ao que consumo e admiro —
              postura que naturalmente trouxe para o Design.
            </p>
            <p>
              Meu propósito é desenvolver soluções que realmente façam a
              diferença na vida das pessoas, sempre com foco em gerar valor.
              Hoje atuo como UI/Visual Designer / Branding Designer,
              dedicando-me a criar experiências visuais que unam funcionalidade
              e estética, entregando resultados que superem expectativas.
            </p>
          </div>
        </section>
        <section className="flex flex-col justify-between gap-4 py-5 md:flex-row">
          <NumberProof number={12} text="Anos de experiência" />
          <NumberProof number={40} text="Projetos Concluídos" />
          <NumberProof number={30} text="Clientes satisfeitos" />
          <Link href="">LINKEDIN</Link>
        </section>
        <section className="gap-5 py-5 md:grid md:grid-cols-3">
          <div className="col-span-3 h-[300px] bg-[#202020] md:h-[450px]"></div>
          <div>
            <ProductCard
              alt="Produto7"
              description="Projeto grupo mensh - branding"
              image={product7}
              locale="Brasil"
              title="Grupo Mensch"
              small
            />
          </div>
          <div className="col-span-2">
            <ProductCard
              alt="Produto 8"
              description="Projeto grupo mensh - branding"
              image={product8}
              locale="Brasil"
              title="Grupo Mensch"
              small
            />
          </div>
        </section>
      </main>
    </div>
  )
}
