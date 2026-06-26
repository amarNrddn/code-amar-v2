'use client'

import { usePathname } from 'next/navigation'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

const hiddenNav = ['/artikel/', '/project/']

const Navbar = () => {
  const pathname = usePathname()
  const hiddenNavPath = hiddenNav.some((path) => pathname?.startsWith(path))

  if (hiddenNavPath) return null

  return (
    <nav>
      <div className="hidden md:block md:fixed md:left-0 md:z-10">
        <NavDesktop />
      </div>
      <NavMobile />
    </nav>
  )
}

export default Navbar
