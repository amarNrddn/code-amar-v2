import { LanguageProvider } from '@/context/LanguageProvider'
import Navbar from '@/components/Navbar/Navbar'

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="md:flex md:justify-center">
        <div className="relative w-full md:max-w-xl lg:max-w-3xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[250px] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse 90% 100% at 50% 0%, black 30%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 100% at 50% 0%, black 30%, transparent 100%)' }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[250px] pointer-events-none hidden dark:block" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse 90% 100% at 50% 0%, black 30%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 100% at 50% 0%, black 30%, transparent 100%)' }} />
          <div className="px-5 dark:bg-black dark:text-white bg-white text-black transition-colors duration-300 min-h-screen">
            <div className="py-8">
              {children}
            </div>
          </div>
        </div>
      </main>
    </LanguageProvider>
  )
}
