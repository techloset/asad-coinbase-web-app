/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rectangle': "url('/images/rectangle.png')",
        'path': "url('/images/path4.png')",
      }
    },
  },
  plugins: [],
}