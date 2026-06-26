const BorderDot = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`border-[1px] border-dashed border-gray-500 ${className}`} />
  )
}

export default BorderDot
