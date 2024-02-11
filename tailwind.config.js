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
        "background": "#F5FAFA",
        "foreground": "#1E1E1E",
        "highlight": "#AD7A99",
        "highlight-blue": "#E1E8F5",
        "highlight-dark": "#002956"
      },
      fontFamily: {
        "sans": ["Abril"]
      },
    },
  },
  plugins: [],
}
