/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      height: () => ({
        screen: '100svh',
      }),
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      heading: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
