/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
      extend: {
          colors: {
            container: 'rgba(41, 59, 89, 0.9)',
            button: 'rgba(6, 12, 17, 1)',
            buttonHover: 'rgba(6, 12, 17, 0.7)',
          },
          fontFamily: {
            'open-sans': ['Open Sans'],
          },
          backgroundImage: {
            'main': "url('./assets/imgs/bg.jpg')",
          }
      },
  },
  plugins: [],
}