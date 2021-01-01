<template>
  <footer class="site-footer">
    <!-- newsletter part -->
    <div class="bg-primary dlab-newsletter">
      <div class="container equal-wraper">
        <form class="dzSubscribe" action="script/mailchamp.php" method="post">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="icon-bx-wraper equal-col p-t30 p-b20 left">
                <div class="icon-lg text-white radius">
                  <i class="ti-email"></i>
                </div>
                <div class="icon-content">
                  <strong class="text-black text-uppercase font-18"
                    >Subscribe</strong
                  >
                  <h2 class="dlab-tilte text-uppercase">Our Newsletter</h2>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="dzSubscribeMsg"></div>
              <div class="input-group equal-col p-t40 p-b10">
                <input
                  name="dzEmail"
                  required
                  placeholder="Email address"
                  class="form-control"
                  type="text"
                />
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 offset-lg-1 offset-md-1">
              <div class="equal-col p-t40 p-b10 skew-subscribe">
                <button
                  name="submit"
                  value="Submit"
                  type="submit"
                  class="site-button-secondry button-skew z-index1"
                >
                  <span>Subscribe</span><i class="fa fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- footer top part -->
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
                <article-item-small
                  v-bind="{
                    image: '/images/blog/recent-blog/pic1.jpg',
                    title: 'Title Of First Blog Post Entry',
                    author: 'Admin',
                  }"
                />
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
export default {
  name: 'Footer',
  components: { ArticleItemSmall },
}
</script>

<style scoped></style>
