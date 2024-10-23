/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], //Tipografia poppins
        quicksand: ['Quicksand', 'sans-serif'], //Tipografia quicksand
      },
      colors: {
        FondoColor:'#303030', //Colores de fondo
        FondoEspecial:'#021D66', //Para seccion especial
        FondoColor2:'#1C1C1C', //Color de fondo
        TextoColor:'#FFFFFF', //color del texto
        TextoEspecial: '#4DD4EF', //colores del texto especial


      }
    },
  },
  plugins: [],
}