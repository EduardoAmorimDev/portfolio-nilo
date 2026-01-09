import type { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import './globals.css'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Guylherme Sarmento',
  description:
    'Portfólio de Guylherme Sarmento, Branding Designer e Web Designer.'
}

type ProjectProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<ProjectProps>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
