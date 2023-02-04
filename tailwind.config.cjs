/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors  = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xs: '321px' // iPhone 5 (really small)
      },
      fontFamily:  {
        sans: ['Martel Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif]
      },
      dropShadow: {
        'homeHero': `0 0 300px ${colors.gray[300]}`
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
