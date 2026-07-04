import type { Metadata } from 'next'
import ProjectClient from './ProjectClient'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codeamar.vercel.app'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Lihat proyek-proyek Amar Nuruddin (codeamar) — showcase dan dokumentasi project frontend, fullstack, dan mobile development.',
  openGraph: {
    title: 'Projects | Amar Nuruddin',
    description:
      'Lihat proyek-proyek Amar Nuruddin (codeamar) — showcase dan dokumentasi project.',
    url: `${siteUrl}/project`,
    images: [
      {
        url: `${siteUrl}/images/profile.webp`,
        width: 400,
        height: 400,
        alt: 'Amar Nuruddin (codeamar)',
      },
    ],
  },
  twitter: {
    title: 'Projects | Amar Nuruddin',
    description:
      'Lihat proyek-proyek Amar Nuruddin (codeamar) — showcase dan dokumentasi project.',
    images: [`${siteUrl}/images/profile.webp`],
  },
}

export default function ProjectPage() {
  return <ProjectClient />
}
