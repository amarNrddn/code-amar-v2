'use client'

import { MdDarkMode } from 'react-icons/md'
import { CiLight } from 'react-icons/ci'
import { useTheme } from '@/context/ThemeProvider'

const TogleTheme = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? (
        <CiLight className="md:text-white text-2xl font-bold" />
      ) : (
        <MdDarkMode className="text-2xl font-bold" />
      )}
    </button>
  )
}

export default TogleTheme
