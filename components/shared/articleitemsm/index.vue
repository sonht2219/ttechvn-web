<template>
  <div class="widget-post clearfix">
    <div class="dlab-post-media">
      <img :src="image" alt="" width="200" height="143" />
    </div>
    <div class="dlab-post-info">
      <div class="dlab-post-header">
        <h6 class="post-title">
          <a href="#">{{ title }}</a>
        </h6>
      </div>
      <div class="dlab-post-meta">
        <ul>
          <li class="post-author">
            By <a href="#">{{ author }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { CommonMixin } from '@/shared/mixins/CommonMixin'

export default {
  name: 'ArticleItemSmall',
  mixins: [CommonMixin],
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
