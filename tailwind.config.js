/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        FondoColor:'#303030',
        /*#021D66 Para seccion especial*/
        FondoColor2:'#1C1C1C',
        TextoColor:'#FFFFFF',
        TextoEspecial: '#4DD4EF',


      }
    },
  },
  plugins: [],
}