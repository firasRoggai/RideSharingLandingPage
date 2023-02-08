/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '120': '28rem',
      },
      colors: {
        primary:"#75BF7A"
      },
    },
  },
  plugins: [],
}
