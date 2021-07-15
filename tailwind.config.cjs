const { colors } = require('@cotowali/design')

const config = {
  mode: "jit",
  purge: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {},
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
