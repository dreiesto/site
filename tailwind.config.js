/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'montserrat':["Montserrat","sans-serif"],
      },
      fontSize: {
        xxs: '0.625rem',
      },
    },
  },
  plugins: [],
}

