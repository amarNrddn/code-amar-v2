import type { Metadata } from 'next'
import BlogClient from './BlogClient'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codeamar.my.id'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Blog Amar Nuruddin (codeamar) — tutorial, tips, dan insight seputar frontend development, React, Next.js, TypeScript, dan teknologi web.',
  openGraph: {
    title: 'Blog | Amar Nuruddin',
    description:
      'Blog Amar Nuruddin (codeamar) — tutorial, tips, dan insight seputar frontend development.',
    url: `${siteUrl}/blog`,
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
    title: 'Blog | Amar Nuruddin',
    description:
      'Blog Amar Nuruddin (codeamar) — tutorial, tips, dan insight seputar frontend development.',
    images: [`${siteUrl}/images/profile.webp`],
  },
}

export default function BlogPage() {
  return <BlogClient />
}
