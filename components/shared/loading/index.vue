<template>
  <div v-show="loading" id="loading-area"></div>
</template>

<script>
export default {
  name: 'Loading',
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      setTimeout(() => {
        this.loading = false
      }, 600)
    },
  },
}
</script>

<style scoped></style>
