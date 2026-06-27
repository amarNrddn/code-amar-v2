import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { cookies } from 'next/headers'
import './globals.css'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Amar Nuruddin',
  description: 'Portfolio & Blog - Amar Nuruddin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const themeCookie = cookieStore.get('theme')?.value
  const isDark = themeCookie === 'dark'

  return (
    <html lang="en" className={isDark ? 'dark' : ''} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://gtgdlgnmlsmrqnnvqyxd.supabase.co" />
        <link rel="dns-prefetch" href="https://gtgdlgnmlsmrqnnvqyxd.supabase.co" />
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
