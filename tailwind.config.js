/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tamañoComputadora': {'min': '1920px', 'max': '1080px'}, // Escritorio: mínimo ancho 1920px y máximo alto 1080px 
       'tamañoCelular': {'max': '340px', 'max-height': '640px'}, // Móvil: máximo ancho 340px y máximo alto 640px
        },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], //Tipografia poppins
        quicksand: ['Quicksand', 'sans-serif'], //Tipografia quicksand
      },
      colors: {
        FondoColor:'#303030', //Colores de fondo
        /*#021D66 Para seccion especial*/
        FondoColor2:'#1C1C1C', //Color de fondo
        TextoColor:'#FFFFFF', //color del texto
        TextoEspecial: '#4DD4EF', //colores del texto especial


      }
    },
  },
  plugins: [],
}