const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        'light-blue': colors.sky
      }
    },
  },
  plugins: [],
}

