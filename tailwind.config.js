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
    },
  },
  plugins: [],
};