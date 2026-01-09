import NextLink, { LinkProps } from 'next/link'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export const Link = ({
  className,
  ...props
}: LinkProps & {
  className?: string
  children: ReactNode
  target?: '_blank'
}) => (
  <NextLink
    {...props}
    className={twMerge(
      'text-primary link relative text-sm leading-[120%]',
      className
    )}
  />
)
