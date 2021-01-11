<template>
  <NuxtLink :to="`/danh-muc/${category.slug}`">{{
    getProp(category, 'name')
  }}</NuxtLink>
</template>

<script>
import { CommonMixin } from '@/shared/mixins/CommonMixin'

export default {
  name: 'CategoryTitle',
  mixins: [CommonMixin],
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    category() {
      return this.$store.state.category.data[this.id]
    },
  },
}
</script>

<style scoped></style>
