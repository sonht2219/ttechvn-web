<template>
  <div class="section-full content-inner">
    <div class="container">
      <div class="section-head text-center">
        <h2 class="text-uppercase">Sản phẩm</h2>
        <div class="dlab-separator-outer">
          <div class="dlab-separator bg-secondry style-skew"></div>
        </div>
      </div>
      <div class="section-content text-center">
        <div class="row">
          <template v-for="(slug, i) in slugs">
            <div :key="i" class="col-lg-3 col-md-6 col-sm-6">
              <product-item :slug="slug" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CommonMixin } from '@/shared/mixins/CommonMixin'
import { mapState, mapActions } from 'vuex'
import { ProductParams } from '@/store/product'
import ProductItem from '@/components/shared/productitem/index'

export default {
  name: 'ProductHome',
  components: { ProductItem },
  mixins: [CommonMixin],
  async fetch() {
    await this.listProduct({ ...new ProductParams(), limit: 15 })
  },
  computed: {
    ...mapState({
      slugs: (state) => state.product.slugs,
    }),
  },
  methods: {
    ...mapActions({
      listProduct: 'product/list',
    }),
  },
}
</script>

<style scoped></style>
