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
  hovered: boolean
}

const ItemNavDesktop = ({ isActive, navItems, hovered }: ItemNavDesktopProps) => {
  const router = useRouter()
  const { t } = useLanguage()

  const styleNav = (item: NavItem) => {
    const isActiveItem = isActive === item.path

    const itemBase = isActiveItem
      ? 'bg-gray-200 dark:bg-[#444] text-gray-700 dark:text-white'
      : 'text-gray-500'

    const itemStyle = hovered
      ? `px-2 py-1 ${itemBase} pl-3 rounded-md`
      : ''

    const hoverStyle = hovered
      ? 'px-2 py-1 hover:bg-gray-200 dark:hover:bg-[#444] hover:pl-3 rounded-md'
      : ''

    const iconStyle = (() => {
      if (hovered) {
        return isActiveItem ? 'text-black dark:text-white' : ''
      }
      return isActiveItem
        ? 'p-2 bg-gray-200 dark:bg-[#333] text-black dark:text-white rounded-full'
        : 'p-2 bg-gray-200 dark:bg-[#333] text-gray-500 rounded-full'
    })()

    return { itemStyle, hoverStyle, iconStyle }
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
