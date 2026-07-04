import { RiHomeSmileLine } from 'react-icons/ri'
import { TbCameraBolt } from 'react-icons/tb'
import { LuPenLine } from 'react-icons/lu'
import { TiShoppingBag } from 'react-icons/ti'
import { LuLayoutDashboard } from 'react-icons/lu'
import { IoMailOutline } from 'react-icons/io5'

export const navItems = [
  {
    icon: <RiHomeSmileLine />,
    path: '/',
    navigation: 'Home',
  },
  {
    icon: <TbCameraBolt />,
    path: '/about',
    navigation: 'About',
  },
  {
    icon: <LuPenLine />,
    path: '/blog',
    navigation: 'Blog',
  },
  {
    icon: <TiShoppingBag />,
    path: '/project',
    navigation: 'Projects',
  },
  {
    icon: <LuLayoutDashboard />,
    path: '/dashboard',
    navigation: 'Dashboard',
  },
  {
    icon: <IoMailOutline />,
    path: '/contact',
    navigation: 'Contact',
  },
]
