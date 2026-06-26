'use client'

import { useTheme } from '@/context/ThemeProvider'

const Border = ({ className = '' }: { className?: string }) => {
  const { theme } = useTheme()
  return (
    <div className={`w-full h-[1px] bg-gray-400 ${className} ${theme === 'dark' ? 'bg-gray-800' : ''}`} />
  )
}

export default Border
