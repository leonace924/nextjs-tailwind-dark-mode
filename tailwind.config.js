/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: ["class", ":global(.dark)"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta-sans)'],
      },
      boxShadow: {
        'hero-image': '0px 14px 84px #E4EBFC'
      },
      colors: {
        primary: '#3563E9',
        secondary: {
          200: '#C3D4E9',
          300: '#90A3BF',
          400: '#596780',
          500: '#1A202C',
          700: '#0D121F',
          900: '#040815',
        },
        dark: '#212121',
        neutral: {
          100: '#E7DEFE',
          400: '#5E43D8',
          500: '#7C5CFC',
        }
      },
      letterSpacing: {
        tight: '-0.02em',
        tighter: '-0.03em'
      },
      maxWidth: {
        '7xl': '1200px'
      },
      opacity: {
        '15': '.15'
      },
      padding: {
        '30': '120px',
        '34': '136px',
        '55': '220px'
      }
    },
  },
  plugins: [
     plugin(function ({ addComponents }) {
      addComponents({
        '.super-container': {
          '@apply max-w-7xl mx-auto': {}
        },
        '.section-p-x': {
          "@apply px-7 xl:px-30": {}
        }
      })
    })
  ],
}