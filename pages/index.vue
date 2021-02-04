<template>
  <div>
    <!--      <Nuxt />-->
    <!-- Slider -->
    <banner />
    <!-- Slider END -->
    <!-- meet & ask -->
    <div class="section-full z-index100 meet-ask-outer bg-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 meet-ask-row p-tb30">
            <div class="row d-flex">
              <div class="col-lg-6">
                <div class="icon-bx-wraper clearfix text-white left">
                  <div class="icon-xl">
                    <span class="icon-cell"><i class="ti-home"></i></span>
                  </div>
                  <div class="icon-content">
                    <h3 class="dlab-tilte text-uppercase m-b10">T-TECH</h3>
                    <p>
                      T-Tech luôn là người bạn đồng hành đáng tin cậy của khách
                      hàng
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 m-t20">
                <nuxt-link
                  to="/lien-he"
                  class="site-button-secondry button-skew m-l10"
                >
                  <span>Liên hệ</span><i class="fa fa-angle-right"></i
                ></nuxt-link>
                <nuxt-link
                  to="/bai-viet/gioi-thieu"
                  class="site-button-secondry button-skew m-l20"
                >
                  <span>Giới thiệu</span><i class="fa fa-angle-right"></i
                ></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- meet & ask END -->
    <!-- About Company -->
    <about-home />
    <!-- About Company END -->
    <!-- Company staus -->
    <company-status />
    <!-- Company staus END -->
    <!-- Product -->
    <product-home />
    <!-- Product END -->
    <!-- OUR SERVICES -->
    <about-two />
    <!-- OUR SERVICES END-->
    <!-- Latest blog -->
    <article-home />
    <!-- Latest blog END -->
    <!-- Testimonials blog -->
    <testimonial />
    <!-- Testimonials blog END -->
  </div>
</template>

<script>
import { CommonMixin } from '@/shared/mixins/CommonMixin'
import Banner from '@/components/home/banner/index'
import AboutHome from '@/components/home/about/index'
import ProductHome from '@/components/home/product/index'
import ArticleHome from '@/components/home/article/index'
import Testimonial from '@/components/home/testimonial/index'
import { SeoMixin } from '@/shared/mixins/SeoMixin'
import { mapGetters } from 'vuex'
import { APP_NAME } from '@/store'
import CompanyStatus from '@/components/home/companystatus/index'
import AboutTwo from '@/components/home/abouttwo/index'
export default {
  name: 'HomePage',
  components: {
    AboutTwo,
    CompanyStatus,
    Testimonial,
    ArticleHome,
    ProductHome,
    AboutHome,
    Banner,
  },
  mixins: [CommonMixin, SeoMixin],
  computed: {
    ...mapGetters({
      appName: APP_NAME,
    }),
    title() {
      return this.appName
    },
  },
}
</script>

<style scoped></style>
