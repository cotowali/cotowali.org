const { colors } = require('@cotowali/design')
const defaultTheme = require('tailwindcss/defaultTheme')

const fontSans = [
  'Lexend',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Yu Gothic"',
  'YuGothic',
  'sans-serif',
]

const fontMono = [
  'Source Code Pro',
  'SFMono-Regular',
  'Menlo',
  'Monaco',
  'Consolas',
  'Liberation Mono',
  'Courier New',
  'monospace',
]

module.exports = {
  mode: 'jit',
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
      borderRadius: {
        DEFAULT: '0.125rem',
      },
      zIndex: {
        front: '10',
      },
      fontSize: {
        '2xs': '0.5rem',
      },
      fontFamily: {
        sans: fontSans,
        mono: fontMono,
        title: ['Montserrat', ...fontSans],
      },
      colors: {
        'brand-red': colors.red.hex(),
        'brand-red-lighten-1': colors.red.lighten(0.2).hex(),
        'brand-dark-red': colors.darkRed.hex(),
        'brand-dark-red-lighten-1': colors.darkRed.lighten(0.2).hex(),
        dark: colors.dark.hex(),
        'dark-darken-1': colors.dark.darken(0.4).hex(),
        black: colors.black.hex(),
        white: colors.white.hex(),
      },
    },
  },
  plugins: [],
}
