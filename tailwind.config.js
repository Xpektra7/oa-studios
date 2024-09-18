/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./src/**/*.css","./src/**/*.js",],
  theme: {
    screens:{
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors:{
        slateGray:'#2b2b2b', // text,headers,primary elements
        warmGold:'#D4AF37', // buttons,borders,hover effects
        offWhite:'#F2F2F2', // background
        deepOliveGreen: '#4D5A45', // secondary elemnts
        softBlack: '#1B1B1B', // footer
      },
    },
  },
  plugins: [],
}

