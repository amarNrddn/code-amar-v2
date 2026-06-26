'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeProvider'
import { themeDark, themeLight } from '@/constants/styles'
import { navItems } from '@/constants/itemsNav'
import ProfileSidebar from './ProfileSidebar'
import ItemNavDesktop from './ItemNavDesktop'
import './style.css'

const NavDesktop = () => {
  const pathname = usePathname()
  const { theme } = useTheme()
  const [hovered, setHovered] = useState(false)
  const [isActive, setIsActive] = useState(pathname)

  useEffect(() => {
    setIsActive(pathname)
  }, [pathname])

  const borderDark = theme === 'dark' ? 'bg-gray-500' : 'bg-gray-200'
  const containerNav = theme === 'dark' ? `${themeDark.className} sidebar-shadow` : `${themeLight.className}`

  return (
    <nav className="fixed left-0 hidden md:block">
      <motion.div
        className={`h-screen ${containerNav} rounded-tr-xl rounded-br-xl shadow-xl relative ${hovered ? '' : 'pt-4'}`}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        initial={{ width: 64 }}
        animate={{ width: hovered ? 200 : 64 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{ overflow: 'hidden' }}
      >
        <ProfileSidebar hovered={hovered} />
        <div className="px-4">
          <div className={`w-full h-0.5 rounded-lg mt-2 ${borderDark}`} />
        </div>
        <div className={`${hovered ? 'px-4' : 'px-3'} pt-4`}>
          <ItemNavDesktop isActive={isActive} navItems={navItems} theme={theme} hovered={hovered} />
        </div>
      </motion.div>
    </nav>
  )
}

export default NavDesktop
