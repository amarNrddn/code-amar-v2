import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkPrimary: '#333',
        darkSecondary: '#444',
        'neutral-700': '#4A5568',
      },
      backgroundImage: {
        'instagram-gradient':
          'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.5)', opacity: '0.7' },
        },
        rainbow: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 1.5s infinite',
        rainbow: 'rainbow 3s ease-in-out infinite',
      },
      scale: {
        '103': '1.03',
      },
      backgroundSize: {
        '400%': '400%',
      },
    },
  },
  plugins: [],
}
export default config
