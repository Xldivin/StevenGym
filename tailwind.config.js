/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundColor:{
        "dark-blue":"#072140",
      },
      background: {
        'image-bg': 'url(../../public/images/enterprenuer.gif)',
      },
    },
  },
  plugins: [],
}