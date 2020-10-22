/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: false,
    standardFontWeights: false,
  },
  purge: {
    mode: 'all',
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enable: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      'content/**/*.md',
    ],
  },
  theme: {
    extend: {},
    darkSelector: '.dark-mode',
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'responsive',
      'hover',
      'focus',
      'active',
      'focus-within',
      'group-hover',
    ],
    divideWidth: [
      'responsive',
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'focus',
    ],
    borderColor: [
      'responsive',
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'focus',
      'active',
      'group-hover',
    ],
    borderOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderStyle: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textOpacity: [
      'responsive',
      'dark',
      'dark-hover',
      'dark-active',
      'hover',
      'focus',
      'active',
      'group-hover',
    ],
    textColor: [
      'dark',
      'dark-hover',
      'dark-active',
      'responsive',
      'hover',
      'focus',
      'active',
      'group-hover',
    ],
    borderWidth: [
      'responsive',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
      'group-hover',
    ],
  },
  options: {
    whitelist: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'p',
      'blockquote',
      'strong',
      'ul',
      'ol',
      'li',
      'a',
      'span',
      'code',
      'samp',
      'article',
    ],
  },
  plugins: [
    require('autoprefixer'),
    require('@tailwindcss/typography'),
    require('tailwindcss-dark-mode')(),
  ],
}
