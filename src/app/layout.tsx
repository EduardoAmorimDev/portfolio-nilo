import type { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import './globals.css'
import { Link, Logo, MenuSquare } from '../components'
import { data } from '../data'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Portfólio Nilo',
  description: 'Portfólio do Nilo'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <header className="relative m-auto flex max-w-[1392px] items-center justify-between px-6 py-[18px] md:py-[38px]">
          <Logo />
          <MenuSquare />
          <div className="hidden gap-8 md:flex">
            {data.links.map(link => (
              <Link key={link} href={`#${link}`}>
                {link}
              </Link>
            ))}
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
