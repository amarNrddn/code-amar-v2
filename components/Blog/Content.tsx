import { Blog } from '@/lib/types'

const Content = ({ blog }: { blog: Blog }) => {
  if (!blog.titleconten) return null

  return (
    <div className="mt-7">
      <h1 className="font-bold text-xl mb-2">{blog.titleconten}</h1>
      <p className="dark:text-white text-gray-500">
        {blog.content}
      </p>
    </div>
  )
}

export default Content
