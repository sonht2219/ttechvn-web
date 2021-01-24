<template>
  <div>
    <!-- inner page banner -->
    <inner-banner v-bind="{ title: title }" />
    <!-- inner page banner END -->
    <!-- contact area -->
    <div class="section-full content-inner bg-white">
      <!-- Product details -->
      <div class="container woo-entry">
        <div class="row m-b30">
          <div class="col-lg-5 col-md-5">
            <div class="product-gallery on-show-slider">
              <VueSlickCarousel
                v-if="getProp(product, 'image_urls', []).length"
                ref="sync1"
                :as-nav-for="$refs.sync2"
                :focus-on-select="true"
                v-bind="
                  vueSlickMultipleSlideSetting(false, true, false, 1, 1, 1, 1)
                "
                class="m-b5"
              >
                <template #prevArrow>
                  <div class="product-custom-arrow-prev">
                    <i class="fa fa-chevron-left"></i>
                  </div>
                </template>
                <template #nextArrow>
                  <div class="product-custom-arrow-next">
                    <i class="fa fa-chevron-right"></i>
                  </div>
                </template>
                <template
                  v-for="(img, i) in getProp(product, 'image_urls', [])"
                >
                  <div :key="`img-${i}`" class="item">
                    <div class="mfp-gallery">
                      <div class="dlab-box">
                        <div class="dlab-thum-bx dlab-img-overlay1">
                          <img :src="img" alt="" class="w-100" />
                          <div class="overlay-bx">
                            <div class="overlay-icon overlay-icon-custom">
                              <a
                                class="mfp-link"
                                :title="getProp(product, 'name')"
                                :href="img"
                              >
                                <i class="ti-fullscreen"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </VueSlickCarousel>

              <VueSlickCarousel
                v-if="getProp(product, 'image_urls', []).length"
                ref="sync2"
                :as-nav-for="$refs.sync1"
                :focus-on-select="true"
                v-bind="
                  vueSlickMultipleSlideSetting(
                    false,
                    false,
                    false,
                    show,
                    3,
                    3,
                    3
                  )
                "
              >
                <template
                  v-for="(img, i) in getProp(product, 'image_urls', [])"
                >
                  <div :key="`img-thumb-${i}`" class="item">
                    <div class="dlab-media dlab-media-custom">
                      <img :src="img" alt="" />
                    </div>
                  </div>
                </template>
              </VueSlickCarousel>
            </div>
          </div>
          <div class="col-lg-7 col-md-7">
            <div class="sticky-top">
              <form method="post" class="cart">
                <div class="dlab-post-title">
                  <h2 class="post-title">
                    <a href="#">{{ getProp(product, 'name') }}</a>
                  </h2>
                  <p class="m-b10">
                    {{ getProp(product, 'description') }}
                  </p>
                  <div class="dlab-divider bg-gray tb15">
                    <i class="icon-dot c-square"></i>
                  </div>
                </div>
                <div class="relative">
                  <h3 class="m-tb10">Giá: Liên hệ</h3>
                  <div class="shop-item-rating">
                    <span class="rating-bx">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </span>
                    <span>5 Rating</span>
                  </div>
                </div>
              </form>
              <div class="row m-t30 product-service">
                <div
                  v-for="(service, i) in productServices"
                  :key="i"
                  class="col-lg-4 col-md-12 col-sm-12 m-b10"
                >
                  <product-service-small v-bind="service" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div
              class="dlab-tabs product-description border-tp bg-tabs tabs-site-button"
            >
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a
                    data-toggle="tab"
                    class="nav-link active"
                    href="#web-design-1"
                  >
                    <i class="fa fa-globe"></i> Chi tiết sản phẩm</a
                  >
                </li>
              </ul>
              <div class="tab-content">
                <div
                  id="web-design-1"
                  class="tab-pane active"
                  v-html="getProp(product, 'details')"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h5 class="m-b20">Sản phẩm khác</h5>
            <VueSlickCarousel
              v-if="productSlugs.length"
              v-bind="
                vueSlickMultipleSlideSetting(false, true, false, 3, 3, 2, 1)
              "
            >
              <template #prevArrow>
                <div class="product-custom-arrow-prev">
                  <i class="fa fa-chevron-left"></i>
                </div>
              </template>
              <template #nextArrow>
                <div class="product-custom-arrow-next">
                  <i class="fa fa-chevron-right"></i>
                </div>
              </template>
              <template v-for="(slug, i) in productSlugs">
                <product-item-large :key="i" :slug="slug" />
              </template>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
      <!-- Product details -->
    </div>
    <!-- contact area  END -->
  </div>
</template>

<script>
import { CommonMixin } from '@/shared/mixins/CommonMixin'
import InnerBanner from '@/components/shared/innerbanner/index'
import ProductItemLarge from '@/components/shared/productitemlg/index'
import { mapActions, mapState } from 'vuex'
import ProductServiceSmall from '@/components/shared/productservicesmall/index'
import { SeoMixin } from '@/shared/mixins/SeoMixin'

export default {
  name: 'ProductDetail',
  components: {
    ProductServiceSmall,
    ProductItemLarge,
    InnerBanner,
  },
  mixins: [CommonMixin, SeoMixin],
  async fetch() {
    try {
      await this.loadSingleProduct(this.slug)
      await this.loadListProduct({
        ...this.params,
        category: this.product?.category?.slug,
      })
    } catch (e) {
      this.throwError('error')
    }
  },
  data: () => ({
    show: 1,
  }),
  computed: {
    ...mapState({
      params: (state) => state.product.params,
      productSlugs: (state) => state.product.slugs,
    }),
    product() {
      return this.$store.state.product.data[this.$route.params.slug]
    },
    imageLink() {
      return this.getProp(this.product, 'image_urls[0]')
    },
    title() {
      return this.getProp(this.product, 'name', '')
    },
    slug() {
      return this.$route.params.slug
    },
  },
  mounted() {
    this.show = 4
  },
  methods: {
    ...mapActions({
      singleProduct: 'product/single',
      listProduct: 'product/list',
    }),
    async loadSingleProduct(slug) {
      await this.singleProduct(slug)
    },
    async loadListProduct(params) {
      await this.listProduct(params)
    },
  },
}
</script>

<style scoped></style>
