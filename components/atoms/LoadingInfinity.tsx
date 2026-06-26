'use client'

import { InfinitySpin } from 'react-loader-spinner'

const LoadingInfinity = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  )
}

export default LoadingInfinity
