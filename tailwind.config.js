/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily :{
        title: ["title", "HelpMe"]
      },
      colors :{
        'inputbg' : '#D9D9D9',
        'buttonbg' : '#4F4F4F'
      }
    },
    
  },
  plugins: [],
}