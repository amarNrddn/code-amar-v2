'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb'
import TogleTheme from '@/components/atoms/TogleTheme'
import { useTheme } from '@/context/ThemeProvider'
import { themeDark } from '@/constants/styles'

interface ProfileSidebarProps {
  hovered: boolean
}

const ProfileSidebar = ({ hovered }: ProfileSidebarProps) => {
  const { theme } = useTheme()

  if (!hovered) {
    return (
      <Image
        src="/images/profile.webp"
        alt="Profile"
        width={40}
        height={40}
        className="rounded-full object-cover mx-auto mt-4"
      />
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
        <div className={`w-24 h-8 rounded-md ${theme === 'dark' ? themeDark.className : 'bg-white'}`} />
      </div>
      <div className="pl-4 flex items-center absolute left-[-4px] top-[-3px]">
        <div className="mt-4 max-w-[100px] px-2 py-1 flex items-center gap-1 border-2 rounded-xl">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulseDot" />
          <p className="text-xs">Hire me.</p>
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
          className="absolute right-5 top-10"
        >
          <TogleTheme />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Image
            src="/images/profile.webp"
            alt="Profile"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full object-cover"
          />
        </motion.div>
        <div className="mt-2 flex items-center">
          <span className="whitespace-nowrap text-lg font-semibold">Amar Nuruddin</span>
          <TbRosetteDiscountCheckFilled className="text-cyan-500 text-2xl ml-1" />
        </div>
        <p className="text-sm text-gray-600">@marzkyy</p>
      </motion.div>
    </div>
  )
}

export default ProfileSidebar
