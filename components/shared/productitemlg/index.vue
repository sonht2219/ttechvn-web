<template>
  <div class="item">
    <div class="item-box">
      <div class="item-img">
        <img
          :src="getProp(product, 'image_urls[0]')"
          alt=""
          class="img-prod-lg"
        />
        <div class="item-info-in item-info-in-custom">
          <ul>
            <li>
              <a
                href="javascript:void(0)"
                @click="detailProduct(getProp(product, 'slug'))"
                ><i class="ti-eye"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="item-info text-center text-black p-a10">
        <h6 class="item-title text-uppercase font-weight-500">
          <a
            href="javascript:void(0)"
            @click="detailProduct(getProp(product, 'slug'))"
          >
            {{ getProp(product, 'name') }}
          </a>
        </h6>
        <ul class="item-review">
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star-half-o"></i></li>
          <li><i class="fa fa-star-o"></i></li>
        </ul>
        <h4 class="item-price">
          <span class="text-primary">Giá: Liên hệ</span>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import { CommonMixin } from '@/shared/mixins/CommonMixin'

export default {
  name: 'ProductItemLarge',
  mixins: [CommonMixin],
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    product() {
      return this.$store.state.product.data[this.slug]
    },
  },
  methods: {
    detailProduct(slug) {
      this.$router.push({ name: 'san-pham-slug', params: { slug } })
    },
  },
}
</script>

<style scoped></style>
