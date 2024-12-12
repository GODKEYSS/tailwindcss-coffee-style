/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          from : {opacity :0},
          to : { opacity :1}
        }
      },
      animation: {
        wiggle: 'slideDown .4s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out'
      },
      colors: {
        'coffee': {
          50:'#c86548',
          100: '#A25F4B',
          200: '#744838'
        }
      },
      
    },
  },
  plugins: [],
}
