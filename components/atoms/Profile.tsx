'use client'

import Image from 'next/image'
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb'

const Profile = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/images/profile.webp"
        alt="navprofile"
        width={48}
        height={48}
        className="rounded-full object-cover w-12 h-12"
      />
      <h3 className="text-xl font-bold ml-2">Amar Nuruddin</h3>
      <TbRosetteDiscountCheckFilled className="text-cyan-500 text-2xl ml-1" />
    </div>
  )
}

export default Profile
