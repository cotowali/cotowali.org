const { colors } = require('@cotowali/design')

const config = {
  mode: "jit",
  purge: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {},
    boxShadow: {
      DEFAULT: '0 2px 3px 2px rgba(0, 0, 0, 0.5)',
    },
    colors: {
      main: colors.brand.red.hex(),
      dark: colors.dark.hex(),
      'dark-darken-1': colors.dark.set('hsl.l', 0.018).hex(),
      white: colors.white.hex(),
    },
  },
  plugins: [],
}

module.exports = config
