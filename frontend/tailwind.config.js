/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {}
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')]
}
