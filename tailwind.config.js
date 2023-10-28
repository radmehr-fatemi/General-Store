/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        animationOpacity:{
          "0%": { opacity: '(0)' }
        },
        animationShowScroll: {
          "0%": { transform:"translateY(100%)" }
        }
      },

      animation: {
        animationOpacity: "animationOpacity .2s forward",
        animationShowScroll: "animationShowScroll .3s forwards"
      }
    },
  },
  plugins: [],
}

