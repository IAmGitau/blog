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
  },
  purge: {
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
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active'],
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
