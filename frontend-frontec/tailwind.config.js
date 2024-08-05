/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index/html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Roboto','Inter', 'sans-serif'],
      },
      textShadow: {
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      fontWeight: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

