<template>
  <div class="item">
    <div
      class="blog-post blog-post-custom blog latest-blog-1 date-style-3 skew-date"
    >
      <div class="dlab-post-media dlab-img-effect zoom-slow">
        <a href="javascript:;" @click="detail(getProp(article, 'slug'))"
          ><img
            style="height: 300px"
            :src="getProp(article, 'thumbnail_url')"
            :alt="getProp(article, 'name')"
        /></a>
      </div>
      <div class="dlab-post-info p-t20">
        <div class="dlab-post-title">
          <h3 class="post-title">
            <a href="javascript:;" @click="detail(getProp(article, 'slug'))">{{ getProp(article, 'name') }}</a>
          </h3>
        </div>
        <div class="dlab-post-meta">
          <ul>
            <li class="post-date">
              <i class="ti-calendar"></i
              ><strong>{{ getProp(article, 'createdAt') }}</strong>
            </li>
          </ul>
        </div>
        <div class="dlab-post-text">
          <p>
            {{ getProp(article, 'description') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CommonMixin } from '@/shared/mixins/CommonMixin'

export default {
  name: 'ArticleItem',
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

<style scoped></style>
