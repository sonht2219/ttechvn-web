export const SeoMixin = {
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.title,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${this.slug}, t-tech`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.title} - Công ty TNHH TTECH`,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: `website`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${this.url}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.imageLink}`,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: `Công ty TNHH TTECH`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Công ty TNHH TTECH`,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: `summary`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.title} - Công ty TNHH TECH`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `Công ty TNHH TTECH`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `${this.imageLink}`,
        },
      ],
    }
  },
  computed: {
    url() {
      return `${this.domainApp}${this.$route.fullPath}`
    },
    imageLink() {
      return this.domainApp + '/logo.png'
    },
    domainApp() {
      return process.env.VUE_APP_DOMAIN
    },
  },
}
