import type { Metadata } from 'next'
import AboutClient from './AboutClient'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codeamar.vercel.app'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Tentang Amar Nuruddin (codeamar) — frontend developer & software engineer. Cerita singkat, perjalanan karir, keahlian coding, dan media sosial.',
  openGraph: {
    title: 'About | Amar Nuruddin',
    description:
      'Tentang Amar Nuruddin (codeamar) — frontend developer & software engineer.',
    url: `${siteUrl}/about`,
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
    title: 'About | Amar Nuruddin',
    description:
      'Tentang Amar Nuruddin (codeamar) — frontend developer & software engineer.',
    images: [`${siteUrl}/images/profile.webp`],
  },
}

export default function AboutPage() {
  return <AboutClient />
}
