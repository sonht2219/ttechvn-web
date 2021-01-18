<template>
  <div>
    <!-- inner page banner -->
    <inner-banner v-bind="{ title: title }" />
    <!-- inner page banner END -->
    <!-- contact area -->
    <div class="content-inner section-full bg-white">
      <!-- Product -->
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="widget bg-white">
              <h4 class="widget-title">Tìm kiếm</h4>
              <search-box @search="onSearch" />
            </div>
            <div class="widget bg-white widget_services">
              <h4 class="widget-title">Danh mục</h4>
              <ul>
                <li v-for="categoryId in listIdsCategory" :key="categoryId">
                  <category-title :id="categoryId" />
                </li>
              </ul>
            </div>
            <div class="widget bg-white recent-posts-entry">
              <h4 class="widget-title">Tin tức</h4>
              <div class="widget-post-bx">
                <template v-for="(slug, i) in articleSlugs">
                  <article-item-small :key="`article-${i}`" :slug="slug" />
                </template>
              </div>
            </div>
            <div class="widget bg-white widget_tag_cloud">
              <h4 class="widget-title">Tags</h4>
              <tags :tags="tags" />
            </div>
          </div>
          <div class="col-lg-9 col-md-8 col-sm-6">
            <div class="text-center m-b50">
              <h2 class="m-t0">Sản phẩm</h2>
              <div class="dlab-separator-outer">
                <div class="dlab-separator bg-primary style-skew"></div>
              </div>
            </div>
            <div id="masonry" class="row">
              <template v-for="slug in productSlugs">
                <div
                  :key="slug"
                  class="col-lg-4 col-md-6 m-b30 product-item card-container"
                >
                  <product-item :slug="slug" />
                </div>
              </template>
            </div>
            <pagination-custom
              :pagination.sync="pagination"
              @change="onchangePage"
            />
          </div>
        </div>
        <div class="row m-t30 product-service">
          <div
            v-for="(service, i) in productServices"
            :key="i"
            class="col-lg-4 col-md-4 col-sm-12 m-b30"
          >
            <product-service v-bind="service" />
          </div>
        </div>
      </div>
      <!-- Product END -->
    </div>
    <!-- contact area  END -->
  </div>
</template>

<script>
import ProductItem from '@/components/shared/productitem/index'
import InnerBanner from '@/components/shared/innerbanner/index'
import ProductService from '@/components/shared/productservice/index'
import ArticleItemSmall from '@/components/shared/articleitemsm/index'
import { CommonMixin } from '@/shared/mixins/CommonMixin'
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'
import CategoryTitle from '@/components/shared/categorytitle/index'
import PaginationCustom from '@/components/shared/paginationcustom/index'
import { SET_META } from '@/store/product'
import SearchBox from '@/components/shared/searchbox/index'
import Tags from '@/components/shared/tags/index'

export default {
  name: 'ProductList',
  components: {
    Tags,
    SearchBox,
    PaginationCustom,
    CategoryTitle,
    ArticleItemSmall,
    ProductService,
    InnerBanner,
    ProductItem,
  },
  mixins: [CommonMixin],
  async fetch() {
    await this.loadProduct({
      ...this.params,
      category: this.$route.query.category,
    })
  },
  data: () => ({
    page: 1,
  }),
  computed: {
    ...mapState({
      productSlugs: (state) => state.product.slugs,
      meta: (state) => state.product.meta,
      params: (state) => state.product.params,
      tags: (state) => state.product.tags,
      articleSlugs: (state) => state.article.slugs,
    }),
    ...mapGetters({
      listIdsCategory: 'category/listIdsChildrenTypeProduct',
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
      listProduct: 'product/list',
    }),
    ...mapMutations({
      setMeta: `product/${SET_META}`,
    }),
    async loadProduct(params) {
      try {
        await this.listProduct(params)
      } catch (e) {}
    },
    onchangePage(page) {
      this.loadProduct({ ...this.params, page })
    },
    onSearch(val) {
      this.loadProduct({ ...this.params, page: 1, search: val })
    },
  },
}
</script>

<style scoped></style>
