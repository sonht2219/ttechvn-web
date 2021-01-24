export default {
  loading: '~/components/shared/loading/index.vue',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'T-TECH',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/templete.css' },
      { rel: 'stylesheet', href: '/css/skin-1.css' },
    ],
    script: [
      { src: '/plugins/bootstrap/js/bootstrap.min.js' },
      { src: '/js/common.js', body: true },
    ],
  },

  // serverMiddleware: ['~/middleware/api/logger.js'],

  router: {
    linkActiveClass: 'active',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    '@/assets/css/vue-slick-carousel-custom.css',
    '@/assets/css/style-custom.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/global-component.js' },
    { src: '~/plugins/repository.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://api.t-techvn.com/api/guest/',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
