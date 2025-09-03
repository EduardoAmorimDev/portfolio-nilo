import NextLink, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

export const Link = ({ ...props }: LinkProps & { children: ReactNode }) => (
  <NextLink
    {...props}
    className="link relative text-sm leading-[120%] text-white"
  />
)
