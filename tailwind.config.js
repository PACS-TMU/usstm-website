/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "background": "#FFFFFF",
      "foreground": "#1E1E1E",
      "highlight": "#D67940",
      // "highlight": "#01B7D4",
      "highlight-dark": "#001D56",
    },
    fontFamily: {
      "sans": ["Abril", "sans-serif"],
      "serif": ["Lato", "serif"],
    },
  },
  plugins: [],
}