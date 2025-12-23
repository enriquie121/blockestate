/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'primary': 'rgb(12 17 31)',
        'secondary': 'rgb(49 46 129)',
        'custom': 'rgb(15 23 42)',
        'white': '#FFFFFF',
        'black': '#000000',
        'gray-light': '#F5F5F5',
        'gray-dark': 'rgb(30 41 59)',
        'gray-100': 'rgb(241 245 249)',
        'gray-200': 'rgb(226 232 240)',
        'gray-300': 'rgb(203 213 225)',
        'gray-400': 'rgb(148 163 184)',
        'gray-500': 'rgb(100 116 139)',
        'gray-700': 'rgb(51 65 85)',
        'rovio300': 'rgb(196 181 253)',
        'violet-100': 'rgb(237 233 254)',
        'violet-300': 'rgb(196 181 253)',
        'violet-900': 'rgb(76 29 149)',
        'violet-700': 'rgb(109 40 217)',
        'green-600': 'rgb(22 163 74)',
        'green-800': 'rgb(22 101 52)',
        'green-500': 'rgb(34 197 94)',
        'rose-500': 'rgb(244 63 94)',
        'yellow-500': 'rgb(234 179 8)',
        'dark-blue': '#4c1d95'
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        serif: ['Canela Deck', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          'lg': '0.5rem',       
          'xl': '1rem',         
          'full': '9999px',     
        },
      },
    },
    plugins: [],
  }
  