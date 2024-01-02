/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/_pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "background": "#FFFFFF",
        "foreground": "#1E1E1E",
        "highlight": "#D67940",
        "highlight-blue": "#E1E8F5",
        "highlight-dark": "#001D56"
      },
      fontFamily: {
        "sans": ["Abril"],
        "serif": ["Lato"],
      },
    },
  },
  plugins: [],
}
