'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Profile from '@/components/atoms/Profile'
import TogleTheme from '@/components/atoms/TogleTheme'
import TogleLanguage from '@/components/atoms/TogleLanguage'
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons'
import { navItems } from '@/constants/itemsNav'
import { useLanguage } from '@/context/LanguageProvider'

const NavMobile = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [togle, setTogle] = useState(false)
  const [active, setActive] = useState(pathname)
  const navRef = useRef<HTMLDivElement>(null)

  const { t } = useLanguage()

  useEffect(() => {
    setActive(pathname)
  }, [pathname])

  const handleNavigation = (path: string) => {
    if (active !== path) {
      router.push(path)
      setTogle(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setTogle(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className={`px-3 py-3 bg-white text-black dark:bg-black dark:text-white md:hidden`}>
      <div className="flex justify-between items-center">
        <Profile />
        <div className="flex items-center gap-3">
          <TogleLanguage />
          <TogleTheme />
          <button onClick={() => setTogle(!togle)} aria-label={togle ? 'Close menu' : 'Open menu'}>
            {togle ? (
              <Cross2Icon className="w-7 h-7 transition-transform duration-300 ease-in-out transform" />
            ) : (
              <HamburgerMenuIcon className="w-7 h-7 transition-transform duration-300 ease-in-out transform" />
            )}
          </button>
        </div>

        <div
          ref={navRef}
          className={`${togle ? 'flex' : 'hidden'} px-3 z-50 bg-white dark:bg-black fixed top-16 left-0 my-2 min-w-full shadow-md navtrantition`}
        >
          {togle && (
            <div className="w-full">
              <ul>
                {navItems.map((item, i) => {
                  const key = item.navigation.toLowerCase()
                  return (
                    <li
                      key={i}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleNavigation(item.path) }}
                      className={`text-lg flex items-center gap-2 mb-4 pl-2 ${active === item.path ? 'bg-gray-200 dark:bg-darkPrimary py-2 rounded-md' : ''}`}
                      onClick={() => handleNavigation(item.path)}
                      aria-label={t('nav.' + key)}
                    >
                      <p className="text-2xl font-medium">{item.icon}</p>
                      <p className="text-lg">{t('nav.' + key)}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavMobile
