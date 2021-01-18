<template>
  <div class="tagcloud">
    <template v-for="(tag, i) in tags">
      <a v-if="i < 10" :key="`tag-${i}`" href="javascript:void(0);">{{
        getProp(tag, 'name')
      }}</a>
    </template>
  </div>
</template>

<script>
import { CommonMixin } from '@/shared/mixins/CommonMixin'

export default {
  name: 'Tags',
  mixins: [CommonMixin],
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.tagcloud a {
  margin-right: 2px;
}
</style>
