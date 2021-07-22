const { colors } = require('@cotowali/design')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
    boxShadow: {
      DEFAULT: '0 3px 1px 0 rgba(0, 0, 0, 0.3), 0 0 4px 0 rgba(0, 0, 0, 0.5)',
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
