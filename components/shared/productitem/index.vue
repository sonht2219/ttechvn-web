<template>
  <div class="dlab-box">
    <div class="dlab-thum-bx dlab-img-effect">
      <img :src="getProp(product, 'image_urls[0]')" alt="" />
      <div class="overlay-bx">
        <div class="overlay-icon">
          <a href="javascript:void(0)">
            <i class="fa fa-search icon-bx-xs"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="dlab-info dlab-info-custom p-a20 text-center">
      <h4 class="dlab-title dlab-tilte-custom m-t0 text-uppercase">
        <a href="#">{{ getProp(product, 'name') }}</a>
      </h4>
      <h2 class="m-b0">Giá: Liên hệ</h2>
      <div class="m-t20">
        <a href="#" class="site-button">Chi tiết</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { CommonMixin } from '@/shared/mixins/CommonMixin'
export default {
  name: 'ProductItem',
  mixins: [CommonMixin],
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState({
      dataProduct: (state) => state.product.data,
    }),
    product() {
      return this.dataProduct[this.id]
    },
  },
}
</script>

<style scoped></style>
