import Image from 'next/image'

const blurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=='

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
      placeholder="blur"
      blurDataURL={blurDataURL}
    />
  )
}

export default ImageLazy
