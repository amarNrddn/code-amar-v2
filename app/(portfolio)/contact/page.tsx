import type { Metadata } from 'next'
import ContactClient from './ContactClient'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codeamar.vercel.app'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Amar Nuruddin (codeamar) — frontend developer & software engineer. Connect via GitHub, LinkedIn, Instagram, or email.',
  openGraph: {
    title: 'Contact | Amar Nuruddin',
    description:
      'Get in touch with Amar Nuruddin (codeamar) — frontend developer & software engineer.',
    url: `${siteUrl}/contact`,
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
    title: 'Contact | Amar Nuruddin',
    description:
      'Get in touch with Amar Nuruddin (codeamar) — frontend developer & software engineer.',
    images: [`${siteUrl}/images/profile.webp`],
  },
}

export default function ContactPage() {
  return <ContactClient />
}
