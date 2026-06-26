import { ReactNode } from 'react'

const HeaderSection = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`flex items-center text-xl font-semibold gap-3 text-gray-600 ${className}`}>
      {children}
    </div>
  )
}

export default HeaderSection
