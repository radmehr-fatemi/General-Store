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
        },

        Show: {
          "0%": { transform: "rotateY(90deg)" }
        }
      },

      animation: {
        animationOpacity: "animationOpacity .2s forward",
        ShowScroll: "ShowScroll .3s forwards",
        ShowScrollTop: "ShowScrollTop .3s forwards",
        Show: "Show .3s forwards",
      },

      boxShadow: {
        cartHome: "0px 2px 4px 0px rgb(137, 139, 190)",
      }
    },
  },
  plugins: [],
}

