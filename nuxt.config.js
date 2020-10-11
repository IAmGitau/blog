const createSitemapRoutes = async () => {
  const routes = []
  const { $content } = require('@nuxt/content')
  const posts = await $content('articles').fetch()

  for (const post of posts) {
    routes.push(`articles/${post.slug}`)
  }

  return routes
}

const hostname =
  process.env.NODE_ENV === 'production'
    ? process.env.BASE_URL
    : 'http://localhost:3000'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    // Primary Meta Tags
    title: 'IamGitau —  Full Stack Developer Articles',
    meta: [
      { name: 'title', content: 'IamGitau —  Full Stack Developer Articles' },
      { name: 'description', content: 'I am a software engineer. ' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://metatags.io/' },
      {
        property: 'og:title',
        content: 'IAmGitau — Personal | Programming Blog.',
      },
      { property: 'og:description', content: 'I am a software engineer. ' },
      {
        property: 'og:image',
        content: '/browser.svg',
      },

      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://metatags.io/' },
      {
        property: 'twitter:title',
        content: 'IAmGitau — Personal | Programming Blog.',
      },
      {
        property: 'twitter:description',
        content: 'I am a software engineer. ',
      },
      {
        property: 'twitter:image',
        content: '/browser.svg',
      },
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'theme-color', content: '#000000' },
    ],
    link: [
      {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/favicon.svg',
      },
    ],
  },

  pageTransition: 'slide-left',

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Doc: https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true,
  },

  purgeCSS: {
    whitelist: ['dark-mode'],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // recaptcha
    '@nuxtjs/recaptcha',
    // nuxt-feed
    '@nuxtjs/feed',
    // sitemap
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname,
    gzip: true,
    path: '/sitemap.xml',
    routes: createSitemapRoutes,
    cacheTime: 1000 * 60 * 30,
    trailingSlash: true,
  },

  feed() {
    const baseUrl = `${hostname}/articles`
    const { $content } = require('@nuxt/content')

    const createFeedArticles = async function (feed) {
      feed.options = {
        title: 'My Blog',
        description: 'I write about technology',
        link: baseUrl,
      }

      const articles = await $content('articles').fetch()

      articles.forEach((article) => {
        const url = `${baseUrl}/${article.slug}`

        feed.addItem({
          title: article.title,
          id: url,
          link: url,
          date: article.published,
          description: article.summary,
          content: article.summary,
          author: article.authors,
        })
      })
    }

    return Object.values({
      rss: { type: 'rss2', file: 'rss.xml' },
      json: { type: 'json1', file: 'feed.json' },
    }).map(({ file, type }) => ({
      path: `feed/${file}`,
      type,
      create: createFeedArticles,
    }))
  },
  privateRuntimeConfig: {
    secretKey: '6LfvgdQZAAAAABwN-X2goEZlCb7JeWJCXso6Z7du',
  },
  recaptcha: {
    hideBadge: true,
    version: 2,
    siteKey: '6LfvgdQZAAAAACS-LitzuXzTZc0a5Ie3aorz8Xrv',
    size: 'invisible',
    language: 'v2',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {
    apiPrefix: '_api_v1_blogs_content',
  },

  loading: {
    color: '#005bcb',
    failedColor: '#ec1a1a',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
