'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeProvider'

const AnalyticIlustration = () => {
  const { theme } = useTheme()
  const animationProps = {
    initial: { pathLength: 0 },
    animate: { pathLength: [0, 1, 0] },
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: 'loop' as const,
      ease: 'easeInOut',
    },
  }

  return (
    <div className="h-40">
      <svg
        viewBox="0 0 300 200"
        preserveAspectRatio="none"
        className={`h-24 w-full border-b border-l ${theme === 'dark' ? 'border-neutral-700' : 'border-neutral-300'}`}
        style={{ borderBottomLeftRadius: '4px' }}
      >
        <motion.path
          d="M 0 150 Q 50 100 100 150 T 200 100 T 300 150 V 200 H 0 Z"
          fill="var(--area1-color)"
          {...animationProps}
        />
        <motion.path
          d="M 0 150 Q 50 100 100 150 T 200 100 T 300 150"
          stroke="var(--line1-color)"
          fill="transparent"
          strokeWidth="2"
          {...animationProps}
        />
        <motion.path
          d="M 0 100 Q 50 50 100 100 T 200 50 T 300 100 V 200 H 0 Z"
          fill="var(--area2-color)"
          {...animationProps}
          transition={{
            ...animationProps.transition,
            delay: 1,
          }}
        />
        <motion.path
          d="M 0 100 Q 50 50 100 100 T 200 50 T 300 100"
          stroke="var(--line2-color)"
          fill="transparent"
          strokeWidth="2"
          {...animationProps}
          transition={{
            ...animationProps.transition,
            delay: 1,
          }}
        />
      </svg>
    </div>
  )
}

export default AnalyticIlustration
