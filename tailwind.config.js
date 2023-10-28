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
        
        ShowScroll: {
          "0%": { transform:"translateY(100%)" }
        },

        ShowScrollTop: {
          "0%": { transform:"translateY(-100%)" }
        }
      },

      animation: {
        animationOpacity: "animationOpacity .2s forward",
        ShowScroll: "ShowScroll .3s forwards",
        ShowScrollTop: "ShowScrollTop .3s forwards"
      }
    },
  },
  plugins: [],
}

