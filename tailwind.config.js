/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'grid-light': `linear-gradient(to right, rgba(0,0,0,0.1) 0.8px, transparent 1px),
                       linear-gradient(to bottom, rgba(0,0,0,0.1) 0.8px, transparent 1px)`,
        'grid-dark': `linear-gradient(to right, rgba(255,255,255,0.4) 0.8px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.4) 0.8px, transparent 1px)`,
      },
      backgroundSize: {
        grid: '111px 111px',
      },
      colors: {
        brand: {
          DEFAULT: '#1E40AF',
          light: '#FEFCFF',
          dark: '#2a2a2a',
        },
      },
    },
  },
  plugins: [],
}
