'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageProvider'

interface NavItem {
  icon: React.ReactNode
  path: string
  navigation: string
}

interface ItemNavDesktopProps {
  isActive: string
  navItems: NavItem[]
  theme: string
  hovered: boolean
}

const ItemNavDesktop = ({ isActive, navItems, theme, hovered }: ItemNavDesktopProps) => {
  const router = useRouter()
  const { t } = useLanguage()

  const styleNav = (item: NavItem) => {
    const isActiveItem = isActive === item.path

    const darkThemeItemStyle = hovered
      ? isActiveItem
        ? 'px-2 py-1 bg-[#444] pl-3 rounded-md text-white'
        : 'text-gray-500'
      : ''

    const lightThemeItemStyle = hovered
      ? isActiveItem
        ? 'px-2 py-1 bg-gray-200 pl-3 rounded-md text-gray-700'
        : ''
      : ''

    const commonHoverStyle = hovered
      ? 'px-2 py-1 hover:bg-[#444] hover:pl-3 rounded-md'
      : ''

    const commonLightHoverStyle = hovered
      ? 'px-2 py-1 hover:bg-gray-200 hover:pl-3 rounded-md'
      : ''

    const darkThemeIconStyle = hovered
      ? isActiveItem
        ? 'text-white'
        : ''
      : isActiveItem
        ? 'p-2 bg-[#333] text-white rounded-full'
        : 'p-2 bg-[#333] text-gray-500 rounded-full'

    const lightThemeIconStyle = hovered
      ? ''
      : isActiveItem
        ? 'p-2 bg-gray-200 text-black rounded-full'
        : 'p-2 bg-gray-200 rounded-full'

    return {
      itemStyle: theme === 'dark' ? darkThemeItemStyle : lightThemeItemStyle,
      hoverStyle: theme === 'dark' ? commonHoverStyle : commonLightHoverStyle,
      iconStyle: theme === 'dark' ? darkThemeIconStyle : lightThemeIconStyle,
    }
  }

  return (
    <ul className="space-y-4">
      {navItems.map((item, i) => {
        const { itemStyle, hoverStyle, iconStyle } = styleNav(item)
        const key = item.navigation.toLowerCase()

        return (
          <li
            key={i}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') router.push(item.path) }}
            className={`flex items-center text-gray-500 space-x-4 cursor-pointer transition-all duration-300 ease-in-out ${itemStyle} ${hoverStyle}`}
            onClick={() => router.push(item.path)}
            aria-label={t('nav.' + key)}
          >
            <span className={`text-lg font-bold ${iconStyle}`}>
              {item.icon}
            </span>

            <motion.span
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="whitespace-nowrap"
            >
              {t('nav.' + key)}
            </motion.span>
          </li>
        )
      })}
    </ul>
  )
}

export default ItemNavDesktop
