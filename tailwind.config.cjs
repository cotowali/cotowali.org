const { colors } = require('@cotowali/design')

const config = {
  mode: "jit",
  purge: [
    "./src/**/*.{html,js,svelte,ts}",
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
      'dark-darken-1': colors.dark.lightness(1.8).hex(),
      white: colors.white.hex(),
    },
  },
  plugins: [],
}

module.exports = config
