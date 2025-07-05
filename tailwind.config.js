/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CC0000', // Vermelho CNN
        secondary: '#1A1A1A', // Cinza escuro
        background: '#F5F5F5', // Cinza claro
        text: '#1A1A1A', // Texto principal
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
      'xs':'390px', //samsung s21//
      'sm': '430px', //iphone 12//   
      'md': '750px',  //mobile// 
      'lg': '850px',  ////
      'xl': '1092px'
    },
    },
  },
  plugins: [function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* Esconder scrollbar em Webkit */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Esconder scrollbar no IE, Edge */
          '-ms-overflow-style': 'none',
          /* Esconder scrollbar no Firefox */
          'scrollbar-width': 'none',
        },
      });
    },],
};