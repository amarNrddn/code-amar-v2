const MobileContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-36 w-max overflow-hidden rounded-lg border dark:border-neutral-700 dark:bg-neutral-950 bg-neutral-100">
      <div className="flex items-center justify-center gap-1 border-b dark:border-neutral-700 dark:bg-neutral-900 bg-neutral-200 px-3 py-1">
        <div className="h-1 w-4 rounded-full dark:bg-neutral-600 bg-neutral-300" />
      </div>
      <div className="flex flex-col gap-1 p-2">{children}</div>
      <div className="absolute bottom-0 flex w-full items-center justify-around gap-1 border-t dark:border-neutral-700 dark:bg-neutral-900 bg-neutral-200 px-3 py-1">
        {[1, 2, 3].map(item => (
          <div key={item} className="h-2 w-2 rounded-full dark:bg-neutral-700 bg-neutral-300" />
        ))}
      </div>
    </div>
  )
}

export default MobileContainer
