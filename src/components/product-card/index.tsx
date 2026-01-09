'use client'
import { useInView, Variants } from 'motion/react'
import * as motion from 'motion/react-client'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { TextTitle } from '../text-title'

interface ProductCardProps {
  alt: string
  description: string
  src: string
  locale: string
  title: string
  slug: string
  small?: boolean
}

export const ProductCard = ({
  alt,
  description,
  src,
  locale,
  title,
  slug,
  small
}: ProductCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const variants: Variants = {
    hidden: { scale: 0.95, y: 50, opacity: 0 },
    visible: { scale: 1, y: 0, opacity: 1 }
  }
  return (
    <Link href={`/${slug}`}>
      <motion.article
        variants={variants}
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ type: 'spring', delay: 0.3, duration: 0.5 }}
        ref={ref}
        className="group flex cursor-pointer flex-col gap-5 py-[30px] md:py-5"
      >
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
            src={src}
          />
          <figcaption className="sr-only">{description}</figcaption>
        </figure>
      </motion.article>
    </Link>
  )
}
