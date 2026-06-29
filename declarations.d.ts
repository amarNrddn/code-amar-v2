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
