export const CommonMixin = {
  methods: {
    isMatchRoute(path) {
      return this.$route.path === path
    },
  },
}
