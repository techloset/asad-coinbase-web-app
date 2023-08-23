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
        'path41': "url('/images/path41.png')",
        'bg': "url('/images/bg.png')",
        'layer5': "url('/images/layerback5.png')",
        'path4.1': "url('/images/path4.1.png')",

        
      },
       fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}