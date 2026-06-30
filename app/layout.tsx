import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import { cookies } from 'next/headers'
import { ThemeProvider } from '@/context/ThemeProvider'
import './globals.css'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codeamar.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Amar Nuruddin (@codeamar) | Frontend Developer & Software Engineer',
    template: '%s | Amar Nuruddin',
  },
  description:
    'Portofolio resmi Amar Nuruddin (codeamar / amarnrddn). Kreator web, pengembang frontend, dan pembagi insight seputar teknologi.',
  keywords: [
    'Amar Nuruddin',
    'codeamar',
    'amarnrddn',
    'frontend developer',
    'software engineer',
    'web developer',
    'portfolio',
    'React',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'Amar Nuruddin', url: siteUrl }],
  creator: 'Amar Nuruddin',
  publisher: 'Amar Nuruddin',
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Amar Nuruddin',
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
    card: 'summary_large_image',
    title: 'Amar Nuruddin (@codeamar) | Frontend Developer & Software Engineer',
    description:
      'Portofolio resmi Amar Nuruddin (codeamar / amarnrddn). Kreator web, pengembang frontend, dan pembagi insight seputar teknologi.',
    images: [`${siteUrl}/images/profile.webp`],
    creator: '@amarnrddn',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo-amar.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    shortcut: '/logo-amar.svg',
    apple: '/logo192.png',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const themeCookie = cookieStore.get('theme')?.value
  const isDark = themeCookie === 'dark'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Amar Nuruddin',
    alternateName: ['codeamar', 'amarnrddn'],
    url: siteUrl,
    image: `${siteUrl}/images/profile.webp`,
    jobTitle: 'Frontend Developer & Software Engineer',
    description:
      'Portofolio resmi Amar Nuruddin. Kreator web, pengembang frontend, dan pembagi insight seputar teknologi.',
    sameAs: [
      'https://github.com/amarNrddn',
      'https://www.linkedin.com/in/amar-nuruddin-592282257/',
      'https://www.instagram.com/amarrnrdn/',
    ],
    knowsAbout: [
      'Web Development',
      'Frontend',
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
    ],
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Amar Nuruddin',
    url: siteUrl,
    description:
      'Portofolio resmi Amar Nuruddin (codeamar). Kreator web, pengembang frontend, dan pembagi insight seputar teknologi.',
    author: {
      '@type': 'Person',
      name: 'Amar Nuruddin',
    },
  }

  return (
    <html lang="en" className={isDark ? 'dark' : ''} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script dangerouslySetInnerHTML={{
          __html: `try{var t=localStorage.getItem('theme');if(!t){var m=document.cookie.match(/theme=([^;]+)/);t=m?m[1]:'light'}if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`
        }} />
        <link rel="preconnect" href="https://gtgdlgnmlsmrqnnvqyxd.supabase.co" />
        <link rel="dns-prefetch" href="https://gtgdlgnmlsmrqnnvqyxd.supabase.co" />
      </head>
      <body className={roboto.className} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
