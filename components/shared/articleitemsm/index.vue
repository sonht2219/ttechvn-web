<template>
  <div class="widget-post clearfix">
    <div class="dlab-post-media">
      <img
        :src="getProp(article, 'thumbnail_url')"
        alt=""
        width="200"
        height="143"
      />
    </div>
    <div class="dlab-post-info">
      <div class="dlab-post-header">
        <h6 class="post-title">
          <a
            href="javascript:void(0)"
            @click="detail(getProp(article, 'slug'))"
            >{{ getProp(article, 'name') }}</a
          >
        </h6>
      </div>
      <div class="dlab-post-text">
        <p style="font-size: 11px">{{ getProp(article, 'description') }}</p>
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
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    article() {
      return this.$store.state.article.data[this.slug]
    },
  },
  methods: {
    detail(slug) {
      this.$router.push({ name: 'bai-viet-slug', params: { slug } })
    },
  },
}
</script>

<style scoped>
.post-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
