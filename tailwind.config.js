/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#0165E1',
        ofWhite: '#F0F2F5',
        darkBg: '#18191A',
        dark: '#242526',
        darkLight: '#3A3B3C',
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

