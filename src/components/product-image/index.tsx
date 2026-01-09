'use client'
import Image, { ImageProps } from 'next/image'
import * as motion from 'motion/react-client'
import { useRef } from 'react'
import { useInView, Variants } from 'motion/react'

export const ProductImage = (props: ImageProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const variants: Variants = {
    hidden: { scale: 0.95, y: 50, opacity: 0 },
    visible: { scale: 1, y: 0, opacity: 1 }
  }

  return (
    <motion.div
      variants={variants}
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ type: 'spring', delay: 0.3, duration: 0.5 }}
      ref={ref}
      className="flex flex-col gap-5"
    >
      <Image {...props} />
    </motion.div>
  )
}
