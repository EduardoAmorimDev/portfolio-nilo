import { Link, Logo, ProductCard } from '@/src/components'
import { ProductImage } from '@/src/components/product-image'
import { data } from '@/src/data'
import { translation } from '@/src/translation/pt'

type ProjectProps = {
  params: Promise<{ slug: string }>
}

export default async function Project({ params }: ProjectProps) {
  const slug = (await params).slug

  const { projects } = translation

  const trans = projects[
    slug as keyof typeof projects
  ] as (typeof projects)['grupo-mensch']

  const project = data.projects.find(project => {
    return project.slug === slug
  })

  const currentIndex = data.projects.findIndex(({ id }) => project?.id === id)

  // go horse total, nao ligo mais
  const nextIndex =
    currentIndex + 1 === data.projects.length ? 0 : currentIndex + 1
  const nextNextIndex =
    nextIndex === 0 ? 1 : nextIndex === 7 ? 0 : nextIndex + 1

  return (
    <div className="m-auto mt-6 mb-6 flex max-w-[1392px] flex-col gap-10 px-6">
      <header
        className="flex max-w-[1392px] items-center md:pt-6 md:pb-10"
        id="topo"
      >
        <Logo />
      </header>
      <h1 className="mb-10 text-[24px]">{trans?.title}</h1>
      <div className="flex flex-wrap justify-between">
        {[
          { label: '[CLIENTE]', value: project?.name.toUpperCase() },
          { label: '[ANO]', value: project?.year },
          {
            label: `[${trans.region.toUpperCase()}]`,
            value: project?.local.toUpperCase()
          }
        ].map(({ label, value }, index) => (
          <div
            key={label}
            className={`${index === 2 ? 'mt-10 sm:mt-0' : ''} flex items-center gap-3`}
          >
            <p>{label}</p>
            <p className="!text-red">{value}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6">
        {project?.images.map(({ alt, src, size }, index) => (
          <div
            key={src}
            className={`flex flex-col gap-6 ${size === 'small' ? 'col-span-2 md:col-span-1' : 'col-span-2'}`}
          >
            <ProductImage
              key={src}
              alt={alt}
              width={1392}
              height={680}
              src={`/projects/${project.id}/${src}`}
            />
            {index === 1 ? (
              <div className="flex flex-col justify-between gap-10 md:flex-row">
                {[
                  { label: '[SERVIÇO]', value: trans.service.toUpperCase() },
                  { label: '[INDÚSTRIA]', value: trans.industry.toUpperCase() }
                ].map(({ label, value }) => (
                  <div key={value} className="flex gap-3">
                    <p>{label}</p>
                    <p className="!text-red">{value}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
        {trans.quote && (
          <>
            <div className="col-span-2 flex items-start justify-between gap-4 md:col-span-1 md:justify-start">
              <ProductImage
                src="CEO.svg"
                width={118}
                height={118}
                alt="CEO"
              ></ProductImage>
              <div>
                <p className="!text-red">{project?.socialProof?.name}</p>
                <p>[{project?.socialProof?.role}]</p>
              </div>
            </div>
            <h1 className="col-span-2 text-[24px] md:col-span-1">
              {trans.quote}
            </h1>
          </>
        )}
      </div>
      <p>[ÚLTIMOS TRABALHOS]</p>
      <section className="gap-5 md:grid md:grid-cols-3">
        <div className="col-span-2">
          <ProductCard
            alt={data.projects[nextIndex].images[0].alt}
            description={data.projects[nextIndex].type}
            src={`/projects/${data.projects[nextIndex].id}/${data.projects[nextIndex].images[0].src}`}
            locale={data.projects[nextIndex].local}
            title={data.projects[nextIndex].name}
            small
            slug={data.projects[nextIndex].slug}
          />
        </div>
        <div>
          <ProductCard
            alt={data.projects[nextNextIndex].images[0].alt}
            description={data.projects[nextNextIndex].type}
            src={`/projects/${data.projects[nextNextIndex].id}/${data.projects[nextNextIndex].images[0].src}`}
            locale={data.projects[nextNextIndex].local}
            title={data.projects[nextNextIndex].name}
            small
            slug={data.projects[nextNextIndex].slug}
          />
        </div>
      </section>
      <section className="mt-[60px] flex flex-col gap-4 md:gap-44">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start md:gap-0">
          <div className="flex flex-1 items-center justify-between gap-10">
            <Logo />
            <Link href="#topo">Topo</Link>
          </div>
        </div>
        <span className="divider block h-[1px] w-full bg-[#2b2b2b] md:hidden" />
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <span className="!text-primary">
            © 2025 — GuySarmento | Todos os direitos reservados
          </span>
          <div className="flex flex-col gap-1">
            <div>
              <Link href="https://wa.me/5548999496945" target="_blank">
                +55(48)999496945
              </Link>
            </div>
            <div>
              <Link href="mailto:guysarmento@gmail.com" target="_blank">
                guysarmento@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
