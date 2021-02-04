import get from 'lodash/get'
import { flattenChildren } from '@/shared/helper/helper'
import { CategoryType } from '@/shared/enums/type'
import { LOGO } from '@/store'
export const CommonMixin = {
  data: () => ({
    productServices: [
      {
        icon: 'ti-truck',
        title: 'Giao hàng',
        description: 'Miễn phí giao hàng toàn quốc',
      },
      {
        icon: 'ti-bag',
        title: 'Sản phẩm',
        description: 'Cam kết sản phẩm chính hãng',
      },
      {
        icon: 'ti-settings',
        title: 'Bảo hành',
        description: 'Bảo hành lên đến 36 tháng',
      },
    ],
  }),
  computed: {
    logo() {
      return this.$store.getters[LOGO]?.logo
    },
    imageBg() {
      return this.$store.getters[LOGO]?.imageBg
    },
  },
  methods: {
    getProp: get,
    isMatchRoute(path) {
      return this.$route.fullPath === path
    },
    slugToCategory(slug) {
      return Object.values(this.$store.state.category.data).find(
        (category) => category.slug === slug
      )
    },
    vueSlickMultipleSlideSetting(
      dots,
      arrows,
      autoplay,
      slidesToShow,
      slidesToShow1024,
      slidesToShow768,
      slidesToShow575
    ) {
      return {
        dots,
        arrows,
        focusOnSelect: true,
        infinite: true,
        autoplay,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow,
        slidesToScroll: 1,
        touchThreshold: 5,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: slidesToShow1024,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: slidesToShow768,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: slidesToShow575,
              slidesToScroll: 1,
            },
          },
        ],
      }
    },
    getProductCategoryIdSameType(slug) {
      const category = this.$store.state.category.data[slug]
      const parent = category?.parent
      if (parent) {
        return flattenChildren(
          this.$store.state.category.data[parent?.slug]
        ).map((child) => child.slug)
      }
      return this.$store.state.category.slugByType[CategoryType.Product]
    },
    throwError(e) {
      this.$nuxt.context.error(e)
    },
  },
}
