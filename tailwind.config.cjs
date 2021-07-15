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
      white: colors.white.hex(),
    },
  },
  plugins: [],
}

module.exports = config
