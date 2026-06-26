import CodeSnippet from '@/components/atoms/CodeSnippet'
import { Blog } from '@/lib/types'

const Instalation = ({ blog }: { blog: Blog }) => {
  if (!blog.instalation) return null

  return (
    <div className="mt-7">
      <h1 className="font-bold text-xl mb-2">Instalation</h1>
      <CodeSnippet code={blog.instalation} language="bash" />
    </div>
  )
}

export default Instalation
