import type { Metadata } from 'next'
import DashboardClient from './DashboardClient'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codeamar.my.id'

export const metadata: Metadata = {
  title: 'Dashboard',
  description:
    'Dashboard pribadi Amar Nuruddin (codeamar) — GitHub contributions chart dan roadmap belajar frontend development.',
  openGraph: {
    title: 'Dashboard | Amar Nuruddin',
    description:
      'Dashboard pribadi Amar Nuruddin (codeamar) — GitHub contributions dan roadmap.',
    url: `${siteUrl}/dashboard`,
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
    title: 'Dashboard | Amar Nuruddin',
    description:
      'Dashboard pribadi Amar Nuruddin (codeamar) — GitHub contributions dan roadmap.',
    images: [`${siteUrl}/images/profile.webp`],
  },
}

export default function DashboardPage() {
  return <DashboardClient />
}
