/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      lineClamp: {
        2: '2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};