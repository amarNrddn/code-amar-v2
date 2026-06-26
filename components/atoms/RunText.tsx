'use client'

import { TypeAnimation } from 'react-type-animation'
import DotAnimation from './DotAnimation'

const RunText = () => {
  return (
    <div className="flex justify-between items-center mb-3">
      <TypeAnimation
        sequence={[
          `Hello Folks, I'm`,
          3000,
          `Hello Folks, I'm Amar Nuruddin`,
          3000,
          `Hello Folks, I'm Software Engineer`,
        ]}
        wrapper="span"
        speed={10}
        repeat={Infinity}
        className="font-bold text-xl md:text-3xl"
      />
      <DotAnimation />
    </div>
  )
}

export default RunText
