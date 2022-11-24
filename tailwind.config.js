module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius:
      {
        '4xl': '35px'
      },
      colors: {
        'blue': {
          '0':
            "#2091F9",
          '1000':
            "#252B42",
        }
      },
      gap:{
        '26':"100px",
        '7.5':"30px"
      },
      padding:{
        '13':"52px"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
