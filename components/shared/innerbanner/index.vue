<template>
  <div
    class="dlab-bnr-inr overlay-black-middle"
    :style="{ 'background-image': `url(${imageBg})` }"
  >
    <div class="container">
      <div class="dlab-bnr-inr-entry">
        <h1 class="text-white">{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { CommonMixin } from '@/shared/mixins/CommonMixin'

export default {
  name: 'InnerBanner',
  mixins: [CommonMixin],
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
