import Image from 'next/image'

interface ImageLazyProps {
  image: string
  className?: string
  alt?: string
  priority?: boolean
  sizes?: string
}

const ImageLazy = ({ image, className = '', alt = '', priority, sizes }: ImageLazyProps) => {
  return (
    <Image
      src={image}
      alt={alt}
      className={className}
      fill
      sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      loading={priority ? 'eager' : 'lazy'}
      priority={priority}
    />
  )
}

export default ImageLazy
