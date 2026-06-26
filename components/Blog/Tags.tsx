import { Blog } from '@/lib/types'

const Tags = ({ blog }: { blog: Blog }) => {
  let parsedTags: string[] = []

  if (Array.isArray(blog.tags)) {
    parsedTags = blog.tags
  } else if (typeof blog.tags === 'string') {
    try {
      parsedTags = JSON.parse((blog.tags as string).replace(/\\"/g, '"'))
    } catch {}
  }

  return (
    <div className="mt-10">
      <h1 className="font-bold">Tags:</h1>
      {parsedTags.length > 0 ? (
        <div className="py-2 px-2 flex flex-wrap">
          {parsedTags.map((tag, index) => (
            <span
              key={index}
              className="mr-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-lg mb-2 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : (
        <p>No tags available</p>
      )}
    </div>
  )
}

export default Tags
