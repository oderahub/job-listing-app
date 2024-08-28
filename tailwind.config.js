/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        sans: ['poppins', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
