import { Link, ProductCard } from '@/src/components'
import { data } from '@/src/data'
import { translation } from '@/src/translation/pt'
import Image from 'next/image'

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
  const nextIndex =
    currentIndex + 1 === data.projects.length ? 0 : currentIndex + 1
  const nextNextIndex =
    currentIndex + 2 === data.projects.length ? 0 : currentIndex + 2

  return (
    <div className="m-auto mt-14 mb-60 flex max-w-[1392px] flex-col gap-10 px-6">
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

        <Link
          href={project?.url || ''}
          target="_blank"
          className="group mt-10 w-[52px] sm:mt-0"
        >
          SITE
          <div className="absolute top-[2px] right-0">
            <span className="open-in-new-small group-hover:before:!bg-red group-hover:!bg-red group-hover:after:!bg-red" />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {project?.images.map(({ alt, src, size }, index) => (
          <div
            key={src}
            className={`flex flex-col gap-6 ${size === 'small' ? 'col-span-2 md:col-span-1' : 'col-span-2'}`}
          >
            <Image
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
              <Image src="CEO.svg" width={118} height={118} alt="CEO"></Image>
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
      {[data.projects[nextIndex], data.projects[nextNextIndex]].map(
        ({ images, name, local, slug, type, id }) => (
          <ProductCard
            key={name}
            alt={images[0].alt}
            description={type}
            src={`/projects/${id}/${images[0].src}`}
            locale={local}
            title={name}
            small={images[0].size === 'small'}
            slug={slug}
          />
        )
      )}
    </div>
  )
}
