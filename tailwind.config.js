/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      height: () => ({
        screen: '100svh',
      }),
      keyframes: {
        'fade-from-right': {
          '0%': { transform: 'translateX(4rem)', opacity: 0 },
          '100%': { transform: 'translateX(0rem)', opacity: 1 },
        },
        'fade-from-left': {
          '0%': { transform: 'translateX(-4rem)', opacity: 0 },
          '100%': { transform: 'translateX(0rem)', opacity: 1 },
        },
      },
      animation: {
        'fade-from-right': 'fade-from-right 1s ease-in-out',
        'fade-from-left': 'fade-from-left 1s ease-in-out',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      heading: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
