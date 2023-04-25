/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#0165E1',
        ofWhite: '#F0F2F5',
        textPrimary: '#050505',
        textSec: '#65676B',
      },
      fontFamily:{
        roboto: "'Roboto', sans-serif",
        poppins: "'Poppins', sans-serif",
      }
    },
  },
  plugins: [],
}

