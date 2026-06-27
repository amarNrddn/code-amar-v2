'use client'

import { MdDarkMode } from 'react-icons/md'
import { CiLight } from 'react-icons/ci'
import { useTheme } from '@/context/ThemeProvider'

const TogleTheme = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
      {theme === 'light' ? (
        <CiLight className="text-2xl font-bold" />
      ) : (
        <MdDarkMode className="text-2xl font-bold" />
      )}
    </button>
  )
}

export default TogleTheme
