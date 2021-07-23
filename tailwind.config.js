const { colors } = require('@cotowali/design')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      minHeight: defaultTheme.spacing,
      minWidth: defaultTheme.spacing,
    },
    borderRadius: {
      DEFAULT: '0.125rem',
    },
    colors: {
      brand: {
        red: colors.brand.red.hex(),
        'red-lighten-1': colors.brand.red.lightness(53).hex(),
        'dark-red': colors.brand.darkRed.hex(),
      },
      dark: colors.dark.hex(),
      'dark-darken-1': colors.dark.darken(0.4).hex(),
      black: '#000', // TODO
      white: colors.white.hex(),
    },
  },
  plugins: [],
}
