import CodeSnippet from '@/components/atoms/CodeSnippet'
import { Blog } from '@/lib/types'

const Code = ({ blog }: { blog: Blog }) => {
  if (!blog.code_snippet) return null

  return (
    <div className="mt-7">
      <h1 className="font-bold text-xl mb-2">Code Snippet</h1>
      <CodeSnippet code={blog.code_snippet} language="javascript" />
    </div>
  )
}

export default Code
