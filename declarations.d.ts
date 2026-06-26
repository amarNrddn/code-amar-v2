declare module 'react-lazy-load-image-component' {
  import { FC, ImgHTMLAttributes } from 'react'
  interface LazyLoadImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    effect?: string
    wrapperClassName?: string
    threshold?: number
    beforeLoad?: () => void
    afterLoad?: () => void
    placeholder?: React.ReactNode
    wrapperProps?: Record<string, any>
    visibleByDefault?: boolean
  }
  export const LazyLoadImage: FC<LazyLoadImageProps>
  export const trackWindowScroll: (component: React.ComponentType<any>) => React.ComponentType<any>
}

declare module 'react-lazy-load-image-component/src/effects/blur.css'

declare module 'react-top-loading-bar' {
  import { FC, RefObject } from 'react'
  interface LoadingBarProps {
    color?: string
    ref?: RefObject<any>
    shadow?: string
    height?: number
    transitionTime?: number
    progress?: number
    className?: string
    onProgress?: (progress: number) => void
  }
  const LoadingBar: FC<LoadingBarProps>
  export default LoadingBar
}

declare module 'react-syntax-highlighter' {
  import { FC, ReactNode } from 'react'
  interface SyntaxHighlighterProps {
    language?: string
    style?: any
    customStyle?: any
    children?: ReactNode
    [key: string]: any
  }
  export const Prism: FC<SyntaxHighlighterProps>
  export const Light: FC<SyntaxHighlighterProps>
  export const Default: FC<SyntaxHighlighterProps>
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  const styles: Record<string, any>
  export const a11yDark: any
  export default styles
}
