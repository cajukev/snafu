
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'zh-Hant',
    },
    title: process.env.npm_package_name || 'KBWeb',
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#003d76' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#003d76' },
  /*
  ** Global CSS
  */
  css: ['~/assets/main.scss'],
  /*
  POLYFILL
  */
  polyfill: {
    log:true,
    features: [
      {
        require: 'intersection-observer',
        detect: () => 'IntersectionObserver' in window,
      },
      {
        require: 'smoothscroll-polyfill',
        detect: () => 'scrollBehavior' in document.documentElement.style && window.__forceSmoothScrollPolyfill__ !== true,
        install: (smoothscroll) => smoothscroll.polyfill()
      }
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/test'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-polyfill',
  ],
  router: {
    middleware: 'pages',
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
    
  },
}
