export type ProjectParams = {
  id: string
  images: { alt: string; src: string; size?: 'small' }[]
  local: string
  name: string
  slug: string
  type: 'brand' | 'site'
  url: string
  year: string
  direction?: string
  socialProof?: {
    name: string
    role: string
  }
}

export type DataParams = {
  links: string[]
  projects: ProjectParams[]
}
