const { colors } = require('@cotowali/design')

const config = {
  mode: "jit",
  purge: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      main: colors.brand.red,
    },
  },
  plugins: [],
}

module.exports = config
