import NextLink, { LinkProps } from 'next/link'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export const Link = ({
  className,
  ...props
}: LinkProps & { className?: string; children: ReactNode }) => (
  <NextLink
    {...props}
    className={twMerge(
      'text-primary relative text-sm leading-[120%]',
      className
    )}
  />
)
