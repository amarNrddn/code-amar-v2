'use client'

import { useTheme } from '@/context/ThemeProvider'

const LoadingCard = () => {
  const { theme } = useTheme()

  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white'
  const pulseColor = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'

  return (
    <>
      {[0, 1, 2, 3, 4, 5].map((item) => {
        return (
          <div
            key={item}
            className={`w-52 rounded-lg overflow-hidden flex-shrink-0 hover:cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-95 shadow-md ${bgColor}`}
          >
            <div className={`relative w-full h-28 ${pulseColor} animate-pulse`} />
            <div className="mt-2 px-2 py-2">
              <div className={`h-4 ${pulseColor} rounded w-3/4 animate-pulse mb-2`} />
              <div className={`h-3 ${pulseColor} rounded w-1/2 animate-pulse`} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default LoadingCard
