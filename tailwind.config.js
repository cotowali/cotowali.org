/** @type {import('tailwindcss').Config} */
const fontSans = [
  'Lexend',
  '"M PLUS 1p"',
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
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: fontSans,
        mono: fontMono,
        title: ['Montserrat', ...fontSans],
      },
    },
  },
  plugins: [],
}
