/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens :{
      sm : '580px',
      md : '768px',
      lg : '976px',
      xl : '1440px',
    },
    extend: {
      colors : {
        redLight : "#F44336",
        pinkLight : "#D81B60",
        blueLight : "#1976D2",
        secondary : "#455A64",
        yellowLight : "#FBC02D",
        greenForest : "#3A6B35",
        sage : "#CBD18F",
        mustard : "#E3B448",
        LightGray : "#f0f0f1",
      } ,
      width: {
        '22': '85px', // Define a custom width size
        'custom-lg': '600px', // Define another custom width size
        '1200-px': '1200px', // Define another custom width size
        '600-px': '600px', // Define another custom width size
        '700-px': '700px', // Define another custom width size
        '900-px': '900px', // Define another custom width size
      },
      height: {
        '22': '85px', // Define a custom height size
        '18': '75px', // Define another custom height size
      },
    },
  },
  plugins: [],
}
