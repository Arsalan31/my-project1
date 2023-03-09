module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:
      {
        '4xl': "35px",
        '2.5xl': "20px",
        '7xl': "129px",
        '9xl': "300px"
      },
      colors: {
        'blue': {
          '0':
            "#2091F9",
          '1000':
            "#252B42",
          '20': " #E6EDEF",
          '30': "rgba(8, 76, 97, 0.05)",
          '70': "#084C61"
        },
        'hex': "#374754",
        'indigo': {
          '650': "#381DDB"
        },
        'purple': {
          '650': "#5E6282"
        },
        'peach': {
          '10': "#FF7D68"
        },
        'pink': {
          '10': "#D099D1"
        },
        'gray': {
          '2': "#AFACAE",
          '3': "#7D787B",
          '4': "#535052",
          '5': "#323031",
          '6': "#595959",
          '8': "#F2F2F2"
        },
        'green': {
          '20': "#00843D"
        }
      },
      gap: {
        '26': "100px",
        '7.5': "30px"
      },
      padding: {
        '13': "52px"
      },
      fontSize: {
        '5xl': "48px",
        '2.5xl': "28px",
        '1xl': "15px"
      },
      lineHeight: {
        '12': "55px",
        '14': "73px",
        '16': "84px"
      },
      height: {
        '13': "50px",
        '15': "59px",
        '18': "71px",
        '19': "78px",
        '22': "88px",
        '58': "232px",
        '62': "246px",
        '76': "314px",
        '92': "360px",
        '95': "380px",
        '98': "435px",
        '99': "470px",
        '99.5': "569px",
        '100': "669px"
      },
      width: {
        '18': "71px",
        '41': "165px",
        '42': "170px",
        '70': "280px",
        '98': "444px",
        '100': "470px",
        '120': "570px"
      },
      boxShadow: {
        '3xl': "0px 13px 19px rgba(0, 0, 0, 0.07)",
        '4xl': "0px 4px 4px rgba(0, 0, 0, 0.15)"
      },
      dropShadow: {
        '3xl': "0px 4px 4px rgba(0, 0, 0, 0.25)"
      },
      bottom: {
        '86': "360px",
        '98': "400px"
      },
      top: {
        '82': "325px",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-rtl'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
