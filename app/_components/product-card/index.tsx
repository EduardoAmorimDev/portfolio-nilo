import Image, { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'
import { TextTitle } from '../text-title'

interface ProductCardProps {
  alt: string
  description: string
  image: StaticImageData
  locale: string
  title: string
  small?: boolean
}

export const ProductCard = ({
  alt,
  description,
  image,
  locale,
  title,
  small
}: ProductCardProps) => (
  <article className="group flex cursor-pointer flex-col gap-5 py-[30px] md:py-5">
    <header className="flex justify-between">
      <TextTitle title={title} text={locale} />
      <span className="open-in-new group-hover:before:!bg-red group-hover:!bg-red group-hover:after:!bg-red" />
    </header>
    <figure
      className={twMerge(
        'relative h-[297px] overflow-hidden',
        small ? 'md:h-[350px]' : 'md:h-[450px] lg:h-[800px]'
      )}
    >
      <Image
        fill
        alt={alt}
        className="object-cover transition-transform duration-1000 group-hover:scale-105"
        src={image}
      />
      <figcaption className="sr-only">{description}</figcaption>
    </figure>
  </article>
)
