const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors:{
        primary: '#283747',
        primaryAlt:'#3C1874',
        secondary: '#932432',
        secondaryAlt:'#DE354C',
        themeBg:'#F3F3F3',
        ...defaultTheme.colors
      },
      fontFamily: {
        'primary': ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
        'secondary': ['EBGaramond', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
