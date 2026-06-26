'use client'

import { useTheme } from '@/context/ThemeProvider'

const WebContainer = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme()
  return (
    <div className={`h-36 w-52 overflow-hidden rounded-lg border ${theme === 'dark' ? 'border-neutral-700' : ''}`}>
      <div className={`flex items-center justify-start gap-1 border-b px-2 py-1 dark:border-neutral-700 ${theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-200'}`}>
        {[1, 2, 3].map(item => (
          <div key={item} className={`h-2 w-2 rounded-full border ${theme === 'dark' ? 'border-neutral-700' : 'border-neutral-400'}`} />
        ))}
      </div>
      <div className={`flex justify-center gap-2 ${theme === 'dark' ? 'bg-neutral-950' : 'bg-neutral-100'} p-3 pb-0`}>
        {children}
      </div>
    </div>
  )
}

export default WebContainer
