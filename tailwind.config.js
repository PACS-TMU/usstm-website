/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./components/*.{html,js}"],
  theme: {
    colors: {
      "background": "#FFFFFF",
      "foreground": "#161616",
      "highlight": "#D67940",
      "highlight-dark": "#001D56"
    },
    fontFamily: {
      "sans": ["Abril"],
      "serif": ["Lato"],
    },
    extend: {},
  },
  plugins: [],
}