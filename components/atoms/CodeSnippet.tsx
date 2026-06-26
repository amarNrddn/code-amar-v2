'use client'

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { IoCopyOutline, IoCheckmark } from 'react-icons/io5'

interface CodeSnippetProps {
  code: string
  language?: string
}

const CodeSnippet = ({ code, language = 'javascript' }: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white transition-colors z-10"
      >
        {copied ? <IoCheckmark className="text-green-400" /> : <IoCopyOutline />}
      </button>
      <SyntaxHighlighter
        language={language}
        style={a11yDark}
        customStyle={{ borderRadius: '8px', padding: '1rem' }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeSnippet
