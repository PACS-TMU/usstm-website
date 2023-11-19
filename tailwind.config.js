/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./components/*.{html,js}"],
  theme: {
    colors: {
      "background": "#FFFFFF",
      "foreground": "#000000",
      "highlight": "#9FC3E9",
      "highlight-dark": "#2C547E"
    },
    fontFamily: {
      "sans": ["Inika"],
      "serif": ["Inter"],
    },
    extend: {},
  },
  plugins: [],
}