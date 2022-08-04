/* eslint-disable @typescript-eslint/no-var-requires */
// Plugins
const typography = require('@tailwindcss/typography')
const forms = require('@tailwindcss/forms')
const lineClamp = require('@tailwindcss/line-clamp')

/** @type { import('tailwindcss/types/config').PluginCreator } */
const child = ({ addVariant }) => {
  addVariant('child', '& > *')
  addVariant('child-hover', '& > *:hover')
}

/**
 * Tailwind configuration file
 *
 * @type {import('tailwindcss').Config}
 */
const config = {
  content: [
    './[Aa]pp.{ts,vue}',
    './pages/**/*.{ts,vue}',
    './layouts/**/*.{ts,vue}',
    './components/**/*.{ts,vue}',
    // './composables/**/*.{ts,vue}',
    './sliders/**/*.{ts,vue}',
    './plugins/**/*.{ts,vue}'
  ],

  darkMode: ['class', '.dark-mode'],

  theme: {
    container: {
      center: true,
      padding: '1rem'
    },

    fontFamily: {
      body: ['Source Sans Pro', 'sans-serif']
    },

    colors: {
      dark: {
        DEFAULT: '#11263A'
      },
      white: {
        DEFAULT: '#FFFFFF',
        light: '#EAF1FF'
      },
      gray: {
        DEFAULT: '#7E868E',
        light: '#BAC2CA'
      },
      blue: {
        DEFAULT: '#2E363E',
        light: '#F2F6FA'
      },
      yellow: {
        DEFAULT: '#FFCA2C',
        light: '#FED84C'
      }
    },

    screens: {
      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1232px'
    },

    extend: {
      fontSize: {
        head: '36px',
        desc: '24px'
      }
    }
  },

  plugins: [typography, forms, lineClamp, child]
}

module.exports = config
