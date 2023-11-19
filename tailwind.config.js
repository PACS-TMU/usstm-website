/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./components/*.{html,js}"],
  theme: {
    colors: {
      "background": "#FFFFFF",
      "foreground": "#000000",
      "highlight": "#63BDEE",
      "highlight-dark": "#465DAE"
    },
    fontFamily: {
      "sans": ["Inika"],
      "serif": ["Inter"],
    },
    extend: {},
  },
  plugins: [],
}