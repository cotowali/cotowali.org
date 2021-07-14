const colors = require('@cotowali/design/colors.json')

const config = {
  mode: "jit",
  purge: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      main: colors.main,
    },
  },
  plugins: [],
}

module.exports = config
