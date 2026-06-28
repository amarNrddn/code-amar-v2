'use client'

interface RibbonProps {
  text: string
}

export default function Ribbon({ text }: RibbonProps) {
  return (
    <div data-testid="ribbon" id="ribbon-container">
      <div className="flex items-center justify-center bg-amber-400 text-[11px] font-medium text-black">
        <span data-testid="ribbon-text" className="-ml-4 font-sans font-bold tracking-wide z-10">
          {text}
        </span>
        <div className="absolute inset-0 pointer-events-none shimmer-slide" />
      </div>
    </div>
  )
}
