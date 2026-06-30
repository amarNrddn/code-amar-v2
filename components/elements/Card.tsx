import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  [propName: string]: unknown
}

export function Card({ children, className = '', ...others }: CardProps) {
  return (
    <div
      className={`rounded-xl shadow-sm transition-all duration-300 lg:hover:shadow-md ${className}`}
      {...others}
    >
      {children}
    </div>
  )
}
