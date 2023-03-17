/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      current: 'currentColor',
      'transparent': 'transparent',
      'white': '#ffffff',
      'primary': '#ff3600',
      'primary-darker': '#c02801',
      'primary-dark': '#992100',
      'silver': '#c8c8c8',
      'secondary': '#333333',
    },
    extend: {},
  },
  plugins: [],
}
