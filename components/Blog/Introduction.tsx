'use client'

import { useTheme } from '@/context/ThemeProvider'
import { textPrimaryDark, textLight } from '@/constants/styles'
import { Blog } from '@/lib/types'

const Introduction = ({ blog }: { blog: Blog }) => {
  const { theme } = useTheme()

  if (!blog.introduction) return null

  return (
    <div className="mt-7">
      <h1 className="font-bold text-xl mb-2">Introduction</h1>
      <p className={`${theme === 'dark' ? textLight.className : textPrimaryDark.className}`}>
        {blog.introduction}
      </p>
    </div>
  )
}

export default Introduction
