'use client'

import { useLanguage } from '@/context/LanguageProvider'

const Story = () => {
  const { t } = useLanguage()

  return (
    <div>
      <div className="leading-loose text-justify">
        <p className="mb-4">{t('about.story.p1')}</p>
        <p className="mb-4">{t('about.story.p2')}</p>
        <p className="mb-4">{t('about.story.p3')}</p>
        <p>{t('about.story.p4')}</p>
      </div>
    </div>
  )
}

export default Story
