<template>
  <div class="section-full content-inner">
    <div class="container">
      <div class="section-head text-center">
        <h2 class="text-uppercase">Bài viết mới</h2>
        <div class="dlab-separator-outer">
          <div class="dlab-separator bg-secondry style-skew"></div>
        </div>
      </div>
      <div class="section-content">
        <VueSlickCarousel
          v-if="slugs.length"
          class="blog-carousel"
          v-bind="vueSlickMultipleSlideSetting(false, false, true, 3, 2, 2, 1)"
        >
          <template v-for="(slug, i) in slugs">
            <article-item :key="i" :slug="slug" />
          </template>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/components/shared/articleitem/index'
import { CommonMixin } from '@/shared/mixins/CommonMixin'
import { mapState, mapActions } from 'vuex'
import { ArticleParams } from '@/store/article'
export default {
  name: 'ArticleHome',
  components: { ArticleItem },
  mixins: [CommonMixin],
  async fetch() {
    await this.listArticle({ ...new ArticleParams(), limit: 5 })
  },
  computed: {
    ...mapState({
      slugs: (state) => state.article.slugs,
    }),
  },
  methods: {
    ...mapActions({
      listArticle: 'article/list',
    }),
  },
}
</script>

<style scoped></style>
