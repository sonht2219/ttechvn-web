<template>
  <div class="icon-bx-wraper bx-style-1 p-a20 left bg-primary text-white">
    <div class="icon-bx-xs bg-white text-primary m-b20">
      <span class="icon-cell"><i :class="icon"></i></span>
    </div>
    <div class="icon-content">
      <h3 class="dlab-tilte text-uppercase m-b5">{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductService',
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
