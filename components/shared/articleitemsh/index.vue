<template>
  <div class="blog-post blog-md clearfix date-style-2">
    <div class="dlab-post-media dlab-img-effect zoom-slow">
      <a href="#" @click="detail(getProp(article, 'slug'))"
        ><img :src="getProp(article, 'thumbnail_url')" alt=""
      /></a>
    </div>
    <div class="dlab-post-info">
      <div class="dlab-post-title">
        <h3 class="post-title">
          <a href="#" @click="detail(getProp(article, 'slug'))">{{
            getProp(article, 'name')
          }}</a>
        </h3>
      </div>
      <div class="dlab-post-meta">
        <ul>
          <li class="post-date">
            <i class="ti-calendar"></i
            ><strong>{{ getProp(article, 'created_at') }}</strong>
          </li>
          <li class="post-author">
            <i class="fa fa-user"></i>By
            <a href="#">{{ getProp(article, 'created_by.name') }}</a>
          </li>
          <li class="post-comment">
            <i class="fa fa-comments-o"></i> <a href="#">10</a>
          </li>
        </ul>
      </div>
      <div class="dlab-post-text">
        <p>{{ getProp(article, 'description') }}</p>
      </div>
      <div class="dlab-post-readmore">
        <a
          href="#"
          title="CHI TIẾT"
          rel="bookmark"
          class="site-button-link"
          @click="detail(getProp(article, 'slug'))"
          >CHI TIẾT<i class="fa fa-angle-double-right"></i
        ></a>
      </div>
      <div class="dlab-post-tags">
        <div class="post-tags">
          <template v-for="(tag, i) in getProp(article, 'tags', [])">
            <a :key="`tag-${i}`" href="#">{{ getProp(tag, 'name') }} </a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CommonMixin } from '@/shared/mixins/CommonMixin'

export default {
  name: 'ArticleItemSH',
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
