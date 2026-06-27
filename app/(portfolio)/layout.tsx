import { ThemeProvider } from '@/context/ThemeProvider'
import { LanguageProvider } from '@/context/LanguageProvider'
import Navbar from '@/components/Navbar/Navbar'

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
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
  )
}
