<template>
  <div>
    <!-- inner page banner -->
    <inner-banner v-bind="{ title: title }" />
    <!-- inner page banner END -->
    <!-- Breadcrumb row -->
    <bread-crumb />
    <!-- Breadcrumb row END -->
    <!-- contact area -->
    <div class="content-inner section-full bg-white">
      <!-- Product -->
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="widget bg-white">
              <h4 class="widget-title">Tìm kiếm</h4>
              <div class="search-bx">
                <form role="search" method="post">
                  <div class="input-group">
                    <input
                      name="text"
                      class="form-control"
                      placeholder="Write your text"
                      type="text"
                    />
                    <span class="input-group-btn">
                      <button type="submit" class="site-button">
                        <i class="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
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
                <article-item-small
                  v-bind="{
                    image: '/images/blog/recent-blog/pic1.jpg',
                    title: 'Title Of First Blog Post Entry',
                    author: 'Admin',
                  }"
                />
              </div>
            </div>
            <div class="widget bg-white widget_tag_cloud">
              <h4 class="widget-title">Tags</h4>
              <div class="tagcloud">
                <a href="javascript:void(0);">Design</a>
                <a href="javascript:void(0);">User interface</a>
                <a href="javascript:void(0);">SEO</a>
                <a href="javascript:void(0);">WordPress</a>
                <a href="javascript:void(0);">Development</a>
                <a href="javascript:void(0);">Joomla</a>
                <a href="javascript:void(0);">Design</a>
                <a href="javascript:void(0);">User interface</a>
                <a href="javascript:void(0);">SEO</a>
                <a href="javascript:void(0);">WordPress</a>
                <a href="javascript:void(0);">Development</a>
                <a href="javascript:void(0);">Joomla</a>
                <a href="javascript:void(0);">Design</a>
                <a href="javascript:void(0);">User interface</a>
                <a href="javascript:void(0);">SEO</a>
                <a href="javascript:void(0);">WordPress</a>
                <a href="javascript:void(0);">Development</a>
                <a href="javascript:void(0);">Joomla</a>
              </div>
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
              <template v-for="id in productIds">
                <div
                  :key="id"
                  class="col-lg-4 col-md-6 m-b30 product-item card-container"
                >
                  <product-item :id="id" />
                </div>
              </template>
            </div>
            <div class="row">
              <pagination
                v-model="page"
                :per-page="1"
                :records="20"
                @paginate="paginate"
              />
            </div>
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
import BreadCrumb from '@/components/shared/breadcrumb/index'
import InnerBanner from '@/components/shared/innerbanner/index'
import ProductService from '@/components/shared/productservice/index'
import ArticleItemSmall from '@/components/shared/articleitemsm/index'
import { CommonMixin } from '@/shared/mixins/CommonMixin'
import { mapActions, mapState, mapGetters } from 'vuex'
import CategoryTitle from '@/components/shared/categorytitle/index'
export default {
  name: 'Category',
  components: {
    CategoryTitle,
    ArticleItemSmall,
    ProductService,
    InnerBanner,
    BreadCrumb,
    ProductItem,
  },
  mixins: [CommonMixin],
  data: () => ({
    page: 1,
  }),
  async fetch() {
    const params = {
      ...{},
      page: 1,
      limit: 20,
      category: this.$route.params.slug,
    }
    await this.loadProduct(params)
  },
  computed: {
    ...mapState({
      productIds: (state) => state.product.ids,
    }),
    ...mapGetters({
      listIdsCategory: 'category/listIdsChildrenTypeProduct',
    }),
    title() {
      return this.slugToCategory(this.$route.params.slug)?.name
    },
    pagination: {
      set(val) {
        console.log(val)
      },
      get() {
        return {
          currentPage: this.$store.state.product.meta?.current_page,
          limit: this.$store.state.product.meta?.limit,
          total: this.$store.state.product.meta?.total,
        }
      },
    },
  },
  methods: {
    ...mapActions({
      listProduct: 'product/list',
    }),
    async loadProduct(params) {
      try {
        await this.listProduct(params)
        console.log(this.productIds)
      } catch (e) {
        console.log(e)
      }
    },
    paginate(page) {
      console.log(page)
    },
  },
}
</script>

<style scoped></style>
