import Image, { StaticImageData } from 'next/image'

interface ProductCardProps {
  alt: string
  description: string
  image: StaticImageData
  locale: string
  title: string
}

export const ProductCard = ({
  alt,
  description,
  image,
  locale,
  title
}: ProductCardProps) => (
  <article className="group grid cursor-pointer gap-5 pt-5 pb-10">
    <header className="flex justify-between">
      <div className="grid gap-6">
        <h3 className="!cursor-pointer">{title}</h3>
        <span>{locale}</span>
      </div>
      <span className="open-in-new group-hover:before:!bg-red group-hover:!bg-red group-hover:after:!bg-red group-hover:translate-y-3 group-hover:rotate-45" />
    </header>
    <figure className="overflow-hidden">
      <Image
        alt={alt}
        className="transition-transform duration-1000 group-hover:scale-105"
        src={image}
      />
      <figcaption className="sr-only">{description}</figcaption>
    </figure>
  </article>
)
