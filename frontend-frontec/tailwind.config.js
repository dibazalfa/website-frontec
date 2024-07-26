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
        inter: ['Inter', 'sans-serif'],
      },
      textShadow: {
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

