'use client'

import { TypeAnimation } from 'react-type-animation'
import DotAnimation from './DotAnimation'
import { useLanguage } from '@/context/LanguageProvider'

const RunText = () => {
  const { t } = useLanguage()

  return (
    <div className="flex justify-between items-center mb-3">
      <TypeAnimation
        sequence={[
          t('runText.hello'),
          3000,
          t('runText.name'),
          3000,
          t('runText.engineer'),
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
