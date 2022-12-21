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
        'hex':"#374754",
        'indigo':{
            '650':"#381DDB"
        }
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
        '12':"55px",
        '14':"73px",
        '16':"84px"
      },
      height:{
        '92':"360px",
        '98':"435px",
        '100':"669px"
      },
      width:{
        '70': "280px",
        '100':"470px",
        '120':"570px"
      },
      boxShadow:{
        '3xl':"0px 13px 19px rgba(0, 0, 0, 0.07)"
      },
      bottom:{
        '86':"360px",
        '98':"400px"
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
