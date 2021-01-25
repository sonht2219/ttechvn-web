<template>
  <div class="icon-bx-wraper bx-style-1 p-a10 left bg-primary text-white">
    <div class="icon-bx-xs icon-bx-xs-small bg-white text-primary m-b10">
      <span class="icon-cell"><i :class="icon"></i></span>
    </div>
    <div class="icon-content">
      <h5 class="dlab-tilte text-uppercase m-b0">{{ title }}</h5>
      <span>{{ description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductServiceSmall',
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

<style scoped>
.icon-content span {
  font-size: 8px;
}
.icon-bx-xs-small {
  margin-right: 10px !important;
}
.m-b0 {
  margin-bottom: 0 !important;
}
</style>
