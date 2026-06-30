'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Profile from '@/components/atoms/Profile'
import TogleTheme from '@/components/atoms/TogleTheme'
import TogleLanguage from '@/components/atoms/TogleLanguage'
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons'
import { navItems } from '@/constants/itemsNav'
import { useLanguage } from '@/context/LanguageProvider'

const NavMobile = () => {
  const pathname = usePathname()
  const [togle, setTogle] = useState(false)
  const [active, setActive] = useState(pathname)
  const navRef = useRef<HTMLDivElement>(null)

  const { t } = useLanguage()

  useEffect(() => {
    setActive(pathname)
  }, [pathname])

  const handleNavigation = () => {
    setTogle(false)
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
    <nav className={`px-3 py-3 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 md:hidden`}>
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
          className={`${togle ? 'flex' : 'hidden'} px-3 z-50 bg-white dark:bg-black transition-colors duration-300 fixed top-16 left-0 my-2 min-w-full shadow-md navtrantition`}
        >
          {togle && (
            <div className="w-full">
              <ul>
                {navItems.map((item, i) => {
                  const key = item.navigation.toLowerCase()
                  const isActiveItem = active === item.path
                  return (
                    <li key={i}>
                      <Link
                        href={item.path}
                        onClick={handleNavigation}
                        aria-label={t('nav.' + key)}
                        aria-current={isActiveItem ? 'page' : undefined}
                        className={`text-lg flex items-center gap-2 mb-4 pl-2 ${isActiveItem ? 'bg-gray-200 dark:bg-darkPrimary py-2 rounded-md' : ''}`}
                      >
                        <span className="text-2xl font-medium">{item.icon}</span>
                        <span className="text-lg">{t('nav.' + key)}</span>
                      </Link>
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
