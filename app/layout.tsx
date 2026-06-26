import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeProvider'
import Navbar from '@/components/Navbar/Navbar'

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
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="md:flex md:justify-center">
            <div className="px-5 relative md:max-w-xl lg:max-w-3xl dark:bg-black dark:text-white bg-white text-black transition-colors duration-300 min-h-screen">
              <div className="py-8">
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
