import { Link, Logo, MenuSquare, ProductCard, TextTitle } from '../components'
import { data } from '../data'
import { NumberProof } from '../components/number-proof'

export default function Home() {
  return (
    <div className="m-auto max-w-[1392px]">
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
            src="/product_1.webp"
            locale="Brasil"
            title="Grupo Mensch"
            slug="grupo-mensch"
          />
          <ProductCard
            alt="Produto 2"
            description="Projeto grupo mensh - branding"
            src="/product_2.webp"
            locale="Brasil"
            title="VoltBras"
            slug="volt-bras"
          />
        </section>
        <section className="gap-5 md:grid md:grid-cols-3">
          <div className="col-span-2">
            <ProductCard
              alt="Produto 6"
              description="Projeto grupo mensh - branding"
              src="/product_6.webp"
              locale="Brasil"
              title="JohnMartinClothing"
              small
              slug="john-martin-clothing"
            />
          </div>
          <div>
            <ProductCard
              alt="Produto 4"
              description="Projeto grupo mensh - branding"
              src="/product_4.webp"
              locale="Portugal"
              title="Evo Studio"
              small
              slug="evo-design"
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
          <Link
            href="https://www.linkedin.com/in/guysarmento/"
            target="_blank"
            className="mt-5 md:mt-0"
          >
            LINKEDIN
          </Link>
        </section>
        <section className="gap-5 py-5 md:grid md:grid-cols-3">
          <div className="col-span-3 h-[300px] bg-[#151515] md:h-[450px]"></div>
        </section>
        <section className="mt-[60px] flex flex-col gap-4 md:gap-44">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start md:gap-0">
            <div className="flex flex-1 items-center justify-between gap-10">
              <Logo />
              <Link href="">Topo</Link>
            </div>
            <div className="flex flex-col items-start gap-6 md:mx-36 md:flex-row md:items-center md:gap-10">
              {data.links.map(link => (
                <Link key={link} href={`#${link}`}>
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <span className="divider block h-[1px] w-full bg-[#2b2b2b] md:hidden" />
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <span className="!text-primary">
              © 2025 — GuySarmento | Todos os direitos reservados
            </span>
            <div className="flex flex-col gap-4">
              <span className="!text-primary">+55(48)999496945</span>
              <span className="!text-primary">guysarmento@gmail.com</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
