'use client'

import { FaGithub } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { useTheme } from '@/context/ThemeProvider'

const SocialMedia = () => {
  const { theme } = useTheme()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className={`relative px-3 py-4 rounded-md border-[1px] ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-300'}`}>
        <p className="font-bold text-xl">Explore the code</p>
        <p className="pr-14 mt-2 text-sm">Explore the source code for all my projects on GitHub.</p>
        <div className={`absolute right-5 bottom-5 w-14 h-14 flex justify-center items-center rounded-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-black'}`}>
          <FaGithub className="text-white text-center w-full text-3xl" />
        </div>
        <a href="https://github.com/amarNrddn" target="_blank" rel="noreferrer">
          <button className={`flex items-center gap-2 py-1 px-2 rounded-md mt-3 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-black text-white'}`}>
            Go to GitHub
            <FaArrowUp className="rotate-45" />
          </button>
        </a>
      </div>

      <div className={`relative px-3 py-4 rounded-md border-[1px] ${theme === 'dark' ? 'bg-sky-800 border-sky-600' : 'bg-sky-200 border-sky-300'}`}>
        <p className="font-bold text-xl">Let`s connect</p>
        <p className="pr-14 mt-2 text-sm">Connect for collaboration or explore my professional experience.</p>
        <div className="absolute right-5 bottom-5 w-14 h-14 flex justify-center items-center rounded-full" style={{ background: '#0077B5' }}>
          <FaLinkedin className="text-white text-center w-full text-3xl" />
        </div>
        <a href="https://www.linkedin.com/in/amar-nuruddin-592282257/" target="_blank" rel="noreferrer">
          <button className="flex items-center gap-2 py-1 px-2 rounded-md mt-3" style={{ background: '#0077B5', color: 'white' }}>
            Go to GitHub
            <FaArrowUp className="rotate-45" />
          </button>
        </a>
      </div>

      <div className={`relative px-3 py-4 rounded-md border-[1px] ${theme === 'dark' ? 'bg-pink-800 border-pink-600' : 'bg-pink-200 border-pink-300'}`}>
        <p className="font-bold text-xl">Let`s follow</p>
        <p className="pr-14 mt-2 text-sm">follow me on instagram</p>
        <div className="absolute right-5 bottom-5 w-14 h-14 flex justify-center items-center rounded-full" style={{ background: theme === 'dark' ? 'linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)' : 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)' }}>
          <FaInstagram className="text-white text-center w-full text-3xl" />
        </div>
        <a href="https://www.instagram.com/amarrnrdn/" target="_blank" rel="noreferrer">
          <button className="flex items-center gap-2 py-1 px-2 rounded-md mt-3" style={{ background: theme === 'dark' ? 'linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)' : 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)', color: 'white' }}>
            Go to GitHub
            <FaArrowUp className="rotate-45" />
          </button>
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
