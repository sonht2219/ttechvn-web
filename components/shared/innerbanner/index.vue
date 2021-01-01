<template>
  <div
    class="dlab-bnr-inr overlay-black-middle"
    style="background-image: url(/images/background/bg4-img.jpg)"
  >
    <div class="container">
      <div class="dlab-bnr-inr-entry">
        <h1 class="text-white">{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InnerBanner',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
