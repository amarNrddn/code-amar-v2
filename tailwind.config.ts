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
        'right-infinite': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(80px)' },
        },
        'slide-card': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'gold-shimmer': {
          '0%, 100%': { backgroundPosition: '200% 0' },
          '50%': { backgroundPosition: '-100% 0' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 1.5s infinite',
        rainbow: 'rainbow 3s ease-in-out infinite',
        'right-infinite': 'right-infinite 1.5s ease-in-out infinite',
        'slide-card': 'slide-card 0.5s ease-out',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        'gold-shimmer': 'gold-shimmer 3s ease-in-out infinite',
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
