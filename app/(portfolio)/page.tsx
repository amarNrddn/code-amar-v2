import type { Metadata } from 'next'
import HomeClient from './HomeClient'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codeamar.vercel.app'

export const metadata: Metadata = {
  description:
    'Portofolio resmi Amar Nuruddin (codeamar / amarnrddn). Kreator web, pengembang frontend, dan pembagi insight seputar teknologi.',
  openGraph: {
    title: 'Amar Nuruddin (@codeamar) | Frontend Developer & Software Engineer',
    description:
      'Portofolio resmi Amar Nuruddin (codeamar / amarnrddn). Kreator web, pengembang frontend, dan pembagi insight seputar teknologi.',
    url: siteUrl,
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
    title: 'Amar Nuruddin (@codeamar) | Frontend Developer & Software Engineer',
    description:
      'Portofolio resmi Amar Nuruddin (codeamar / amarnrddn). Kreator web, pengembang frontend, dan pembagi insight seputar teknologi.',
    images: [`${siteUrl}/images/profile.webp`],
  },
}

export default function HomePage() {
  return <HomeClient />
}
