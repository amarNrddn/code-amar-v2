import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeProvider'
import { LanguageProvider } from '@/context/LanguageProvider'
import Navbar from '@/components/Navbar/Navbar'

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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://gtgdlgnmlsmrqnnvqyxd.supabase.co" />
        <link rel="dns-prefetch" href="https://gtgdlgnmlsmrqnnvqyxd.supabase.co" />
      </head>
      <body className={roboto.className}>
        <ThemeProvider>
          <LanguageProvider>
          <Navbar />
          <main className="md:flex md:justify-center">
            <div className="px-5 relative md:max-w-xl lg:max-w-3xl dark:bg-black dark:text-white bg-white text-black transition-colors duration-300 min-h-screen">
              <div className="py-8">
                {children}
              </div>
            </div>
          </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
