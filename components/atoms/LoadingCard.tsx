const LoadingCard = () => {
  return (
    <>
      {[0, 1, 2, 3, 4, 5].map((item) => {
        return (
          <div
            key={item}
            className="w-72 rounded-lg overflow-hidden flex-shrink-0 hover:cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-95 shadow-md dark:bg-gray-900 bg-white"
          >
            <div className="relative w-full h-40 dark:bg-gray-700 bg-gray-200 animate-pulse" />
            <div className="mt-2 px-2 py-2">
              <div className="h-4 dark:bg-gray-700 bg-gray-200 rounded w-3/4 animate-pulse mb-2" />
              <div className="h-3 dark:bg-gray-700 bg-gray-200 rounded w-1/2 animate-pulse" />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default LoadingCard
