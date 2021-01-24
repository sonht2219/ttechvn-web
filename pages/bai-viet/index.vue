<template>
  <div>
    <!-- inner page banner -->
    <inner-banner v-bind="{ title: title }" />
    <!-- inner page banner END -->
    <div class="content-area">
      <div class="container">
        <div class="row">
          <!-- Side bar start -->
          <div class="col-lg-3 col-md-5 col-sm-6">
            <aside class="side-bar">
              <div class="widget">
                <h4 class="widget-title">Tìm kiếm</h4>
                <search-box @search="onSearch" />
              </div>
              <div class="widget recent-posts-entry">
                <h4 class="widget-title">Bài viết khác</h4>
                <div class="widget-post-bx">
                  <template v-for="(slug, i) in slugs">
                    <article-item-small
                      :key="`article-other-${i}`"
                      :slug="slug"
                    />
                  </template>
                </div>
              </div>
              <div class="widget widget_tag_cloud">
                <h4 class="tagcloud">Tags</h4>
                <tags :tags="tags" />
              </div>
            </aside>
          </div>
          <!-- Side bar END -->
          <!-- Left part start -->
          <div class="col-lg-9 col-md-7 col-sm-6">
            <template v-for="(slug, i) in slugs">
              <article-item-s-h :key="`article-${i}`" :slug="slug" />
            </template>
          </div>
          <pagination-custom
            :pagination.sync="pagination"
            @change="onchangePage"
          />
          <!-- Left part END -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleItemSH from '@/components/shared/articleitemsh/index'
import { CommonMixin } from '@/shared/mixins/CommonMixin'
import { mapState, mapActions, mapMutations } from 'vuex'
import { ArticleParams } from '@/store/article'
import { SET_META } from '@/store/product'
import PaginationCustom from '@/components/shared/paginationcustom/index'
import Tags from '@/components/shared/tags/index'
import SearchBox from '@/components/shared/searchbox/index'
import InnerBanner from '@/components/shared/innerbanner/index'
import ArticleItemSmall from '@/components/shared/articleitemsm/index'
import { SeoMixin } from '@/shared/mixins/SeoMixin'

export default {
  name: 'ArticleList',
  watchQuery: true,
  components: {
    ArticleItemSmall,
    InnerBanner,
    SearchBox,
    Tags,
    PaginationCustom,
    ArticleItemSH,
  },
  mixins: [CommonMixin, SeoMixin],
  async fetch() {
    try {
      await this.loadListArticle({
        ...new ArticleParams(),
        category: this.$route.query.category,
      })
    } catch (e) {
      this.throwError('error')
    }
  },
  computed: {
    ...mapState({
      slugs: (state) => state.article.slugs,
      meta: (state) => state.article.meta,
      params: (state) => state.article.params,
      tags: (state) => state.article.tags,
    }),
    title() {
      return this.slugToCategory(this.$route.query.category)?.name
    },
    pagination: {
      set(val) {
        this.setMeta(val)
      },
      get() {
        return this.meta
      },
    },
  },
  watch: {
    '$route.query': '$fetch',
  },
  methods: {
    ...mapActions({
      listArticle: 'article/list',
    }),
    ...mapMutations({
      setMeta: `article/${SET_META}`,
    }),
    async loadListArticle(params) {
      try {
        await this.listArticle(params)
      } catch (e) {}
    },
    onchangePage(page) {
      this.loadListArticle({ ...this.params, page })
    },
    onSearch(val) {
      this.loadListArticle({ ...this.params, page: 1, search: val })
    },
  },
}
</script>

<style scoped></style>
