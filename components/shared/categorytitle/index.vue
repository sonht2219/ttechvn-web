<template>
  <NuxtLink :to="`/san-pham?category=${category.slug}`">{{
    getProp(category, 'name')
  }}</NuxtLink>
</template>

<script>
import { CommonMixin } from '@/shared/mixins/CommonMixin'

export default {
  name: 'CategoryTitle',
  mixins: [CommonMixin],
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    category() {
      return this.$store.state.category.data[this.slug]
    },
  },
}
</script>

<style scoped></style>
