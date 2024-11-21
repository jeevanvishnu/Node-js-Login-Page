/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-rgba': 'rgba(255, 87, 34, 0.5)', // Custom RGBA color
      },
    },
  },
  plugins: [],
}