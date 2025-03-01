module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './resouces/js/*.js'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'theme-primary': '#5368DF',
        'theme-secondary': '#FA5757',
        'theme-grayish-blue': '#9194A1',
        'theme-dark-blue': 'rgb(37, 43, 70)',
        'theme-dark-blue-tp': 'rgba(37, 43, 70, 0.9)',
      },
      fontFamily: {
        'theme-font': ['Rubik']
      },
      zIndex: {
        '-10': '-10',
      },
      letterSpacing: {
        widest: '0.25em',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}