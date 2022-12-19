/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-blue" : "#072140",
        "primary-blue" : "#3070B3",
        "primary-gray" : "#E8ECEF",
        "primary-purple" : "#8F81EA",
        "whitish-purple" : "#EFEDFC",
        "dark-orange" : "#EA7237"
      },
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