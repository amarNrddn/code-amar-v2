'use client'

import { Triangle } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
      />
    </div>
  )
}

export default Loading
