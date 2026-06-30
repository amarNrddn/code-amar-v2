'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb'
import TogleTheme from '@/components/atoms/TogleTheme'
import TogleLanguage from '@/components/atoms/TogleLanguage'
import { useLanguage } from '@/context/LanguageProvider'

interface ProfileSidebarProps {
  hovered: boolean
}

const ProfileSidebar = ({ hovered }: ProfileSidebarProps) => {
  const { t } = useLanguage()

  if (!hovered) {
    return (
      <div className="flex justify-center mt-4">
        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
          <Image
            src="/images/profile.webp"
            alt="Amar Nuruddin (codeamar)"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <div
        className="bgsidebar"
        style={{
          backgroundImage: 'url(/images/bg-sidebar.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '20px 20px 20px 20px',
          height: '50%',
          width: '100%',
          position: 'absolute',
          top: '10px',
        }}
      >
        <div className="w-24 h-8 rounded-md bg-white dark:bg-black transition-colors duration-300" />
      </div>
      <div className="pl-4 flex items-center absolute left-[-4px] top-[-3px]">
        <div className="mt-4 max-w-[100px] px-2 py-1 flex items-center gap-1 border-2 rounded-xl">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulseDot" />
          <p className="text-xs">{t('nav.hire')}</p>
        </div>
      </div>
      <motion.div
        animate={{ width: hovered ? 200 : 60 }}
        className="relative flex flex-col justify-center items-center pt-14 border-black"
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute right-2 top-[15px] flex items-center gap-1 px-2 py-1 rounded-full bg-white/80 dark:bg-black/50 transition-colors duration-300"
        >
          <TogleLanguage />
          <TogleTheme />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Image
            src="/images/profile.webp"
            alt="Amar Nuruddin (codeamar)"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full object-cover"
          />
        </motion.div>
        <div className="mt-2 flex items-center">
          <span className="whitespace-nowrap text-lg font-medium">{t('nav.name')}</span>
          <TbRosetteDiscountCheckFilled className="text-cyan-500 text-2xl ml-1" />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{t('nav.username')}</p>
      </motion.div>
    </div>
  )
}

export default ProfileSidebar
