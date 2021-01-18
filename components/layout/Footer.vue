<template>
  <footer class="site-footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 footer-col-4">
            <div class="widget widget_about">
              <div class="logo-footer">
                <img src="/images/logo.png" alt="" />
              </div>
              <p>
                <strong>T-TECH </strong> là một trong những đơn vị đã sản xuất,
                sửa chữa xe chữa cháy với chất lượng và uy tín cao, được các
                khách hàng ghi nhận. Với khả năng làm chủ hoàn toàn các nghệ mới
                nên sản phẩm được thiết kế và sản xuất phù hợp, ổn định, thiện,
                hiểu quả với người sử dụng.
              </p>
              <ul class="dlab-social-icon dez-border">
                <li>
                  <a class="fa fa-facebook" href="javascript:void(0);"></a>
                </li>
                <li>
                  <a class="fa fa-twitter" href="javascript:void(0);"></a>
                </li>
                <li>
                  <a class="fa fa-linkedin" href="javascript:void(0);"></a>
                </li>
                <li>
                  <a class="fa fa-facebook" href="javascript:void(0);"></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 footer-col-4">
            <div class="widget recent-posts-entry">
              <h4 class="m-b15 text-uppercase">Tin tức</h4>
              <div class="dlab-separator-outer m-b10">
                <div class="dlab-separator bg-white style-skew"></div>
              </div>
              <div class="widget-post-bx">
                <template v-for="(slug, i) in articleSlugs">
                  <article-item-small :key="`article-${i}`" :slug="slug" />
                </template>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 footer-col-4">
            <div class="widget widget_services">
              <h4 class="m-b15 text-uppercase">Dịch vụ</h4>
              <div class="dlab-separator-outer m-b10">
                <div class="dlab-separator bg-white style-skew"></div>
              </div>
              <ul>
                <li>
                  <a href="engine-diagnostics.html">Engine Diagnostics</a>
                </li>
                <li>
                  <a href="lube-oil-and-filters.html">Lube, Oil and Filters</a>
                </li>
                <li><a href="belts-and-hoses.html">Belts and Hoses</a></li>
                <li>
                  <a href="air-conditioning.html">Air Conditioning</a>
                </li>
                <li><a href="brake-repair.html">Brake Repair</a></li>
                <li>
                  <a href="tire-and-wheel-services.html">Tire And Wheel</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 footer-col-4">
            <div class="widget widget_getintuch">
              <h4 class="m-b15 text-uppercase">Liên hệ</h4>
              <div class="dlab-separator-outer m-b10">
                <div class="dlab-separator bg-white style-skew"></div>
              </div>
              <ul>
                <li>
                  <i class="ti-location-pin"></i><strong>Địa chỉ</strong> demo
                  address #8901 Marmora Road Chi Minh City, Vietnam
                </li>
                <li>
                  <i class="ti-mobile"></i
                  ><strong>Điện thoại</strong>0800-123456 (24/7 Support Line)
                </li>
                <li>
                  <i class="ti-email"></i><strong>Email</strong>info@demo.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer bottom part -->
    <div class="footer-bottom footer-line">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 text-left">
            <span>© Copyright 2020</span>
          </div>
          <div class="col-lg-4 col-md-4 text-center">
            <span>
              Design With <i class="ti-heart text-primary heart"></i> By T-Tech
            </span>
          </div>
          <div class="col-lg-4 col-md-4 text-right">
            <a href="about-1.html"> Giới thiệu</a>
            <a href="faq-1.html"> Hỏi đáp</a>
            <a href="contact.html"> Liên hệ</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import ArticleItemSmall from '@/components/shared/articleitemsm/index'
import { mapState } from 'vuex'
export default {
  name: 'Footer',
  components: { ArticleItemSmall },
  computed: {
    ...mapState({
      articleSlugs: (state) => state.article.slugs,
    }),
  },
}
</script>

<style scoped></style>
