'use client'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

interface ImageLazyProps {
  image: string
  className?: string
  alt?: string
}

const ImageLazy = ({ image, className = '', alt = '' }: ImageLazyProps) => {
  return (
    <LazyLoadImage
      src={image}
      alt={alt}
      className={className}
      effect="blur"
      wrapperProps={{
        style: { transitionDelay: '1s' },
      }}
    />
  )
}

export default ImageLazy
