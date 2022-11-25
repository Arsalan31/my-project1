module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius:
      {
        '4xl': "35px",
        '2.5xl':"20px"
      },
      colors: {
        'blue': {
          '0':
            "#2091F9",
          '1000':
            "#252B42",
        },
        'hex':"#374754"
      },
      gap:{
        '26':"100px",
        '7.5':"30px"
      },
      padding:{
        '13':"52px"
      },
      fontSize:{
        '5xl':"48px",
        '2.5xl':"28px",
        '1xl':"15px"
      },
      lineHeight:{
        '12':"55px"
      },
      height:{
        '100':"669px"
      },
      boxShadow:{
        '3xl':"0px 13px 19px rgba(0, 0, 0, 0.07)"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
