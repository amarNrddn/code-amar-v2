const Border = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`w-full h-[1px] dark:bg-gray-800 bg-gray-400 ${className}`} />
  )
}

export default Border
