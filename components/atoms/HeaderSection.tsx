import { ReactNode } from 'react'

const HeaderSection = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <h2 className={`flex items-center text-xl font-medium gap-3 text-gray-600 ${className}`}>
      {children}
    </h2>
  )
}

export default HeaderSection
