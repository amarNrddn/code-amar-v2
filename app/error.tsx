'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5">
      <h1 className="text-4xl font-bold mb-4">Terjadi Kesalahan</h1>
      <p className="text-lg text-gray-500 mb-8 text-center">
        Maaf, terjadi kesalahan yang tidak terduga.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md hover:opacity-80 transition-opacity"
      >
        Coba Lagi
      </button>
    </div>
  )
}
