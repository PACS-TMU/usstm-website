/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./components/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background": "#FFFFFF",
        "foreground": "#1E1E1E",
        "highlight": "#D67940",
        // "highlight": "#01B7D4",
        "highlight-dark": "#001D56",
      },
      fontFamily: {
        "sans": ["Abril"],
        "serif": ["Lato"],
      },
    },
  },
  plugins: [],
}