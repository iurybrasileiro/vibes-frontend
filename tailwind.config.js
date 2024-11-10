/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      height: () => ({
        screen: '100svh',
      }),
    },
  },
  plugins: [],
}
