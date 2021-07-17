const { colors } = require('@cotowali/design')

const config = {
  mode: "jit",
  purge: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {},
    boxShadow: {
      DEFAULT: '0 2px 5px 0 rgba(0, 0, 0, 0.3)',
    },
    colors: {
      brand: {
        red: colors.brand.red.hex(),
        'red-lighten-1': colors.brand.red.set('hsl.l', 0.53).hex(),
      },
      dark: colors.dark.set('hsl.l', 0.14).hex(),
      'dark-darken-1': colors.dark.set('hsl.l', 0.018).hex(),
      white: colors.white.hex(),
    },
  },
  plugins: [],
}

module.exports = config
