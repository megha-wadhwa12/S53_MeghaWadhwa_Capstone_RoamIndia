/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      navbar: ['Jacques Francois'],
    },
    height: {
      '128': '12rem',
    }
  },
  plugins: [require("daisyui")],
}