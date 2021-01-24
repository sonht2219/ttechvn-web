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
    <div
      class="section-full text-white bg-img-fix content-inner overlay-black-middle"
      style="background-image: url(images/background/bg4-img.jpg)"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="dex-box text-primary border-2 counter-box m-b30">
              <h2 class="text-uppercase m-a0 p-a15">
                <i class="fa fa-group m-r20"></i>
                <span class="counter">1226</span>
              </h2>
              <h5 class="dlab-tilte text-uppercase m-a0">
                <span
                  class="dlab-tilte-inner skew-title bg-primary p-lr15 p-tb10"
                  >Khách hàng</span
                >
              </h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="dex-box text-primary border-2 counter-box m-b30">
              <h2 class="text-uppercase m-a0 p-a15">
                <i class="ti-home m-r20"></i>
                <span class="counter">1035</span>
              </h2>
              <h5 class="dlab-tilte text-uppercase m-a0">
                <span
                  class="dlab-tilte-inner skew-title bg-primary p-lr15 p-tb10"
                  >Kho mẫu</span
                >
              </h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="dex-box text-primary border-2 counter-box m-b30">
              <h2 class="text-uppercase m-a0 p-a15">
                <i class="fa fa-slideshare m-r20"></i>
                <span class="counter">1552</span>
              </h2>
              <h5 class="dlab-tilte text-uppercase m-a0">
                <span
                  class="dlab-tilte-inner skew-title bg-primary p-lr15 p-tb10"
                  >Nhân sự</span
                >
              </h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="dex-box text-primary border-2 counter-box m-b10">
              <h2 class="text-uppercase m-a0 p-a15">
                <i class="fa fa-home m-r20"></i>
                <span class="counter">1156</span>
              </h2>
              <h5 class="dlab-tilte text-uppercase m-a0">
                <span
                  class="dlab-tilte-inner skew-title bg-primary p-lr15 p-tb10"
                  >Kinh nghiệm</span
                >
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Company staus END -->
    <!-- Product -->
    <product-home />
    <!-- Product END -->
    <!-- OUR SERVICES -->
    <div class="section-full bg-white content-inner">
      <div class="container">
        <div class="section-head text-center">
          <h2 class="text-uppercase">Về chúng tôi</h2>
          <div class="dlab-separator-outer">
            <div class="dlab-separator bg-secondry style-skew"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="icon-bx-wraper center m-b40">
              <div class="icon-bx-sm bg-secondry m-b20">
                <span class="icon-cell"
                  ><i class="ti-reload text-primary"></i
                ></span>
              </div>
              <div class="icon-content">
                <h5 class="dlab-tilte text-uppercase">Tính sẵn có</h5>
                <p>
                  Công ty T-Tech luôn đảm bảo sẵn sàng và kịp thời giao hàng cho
                  khách hàng từ 4 – 20 tuần kể từ ngày mua hàng, tùy thuộc loại
                  sản phẩm.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="icon-bx-wraper center m-b40">
              <div class="icon-bx-sm bg-secondry m-b20">
                <span class="icon-cell"
                  ><i class="ti-car text-primary"></i
                ></span>
              </div>
              <div class="icon-content">
                <h5 class="dlab-tilte text-uppercase">Uy tín hàng đầu</h5>
                <p>
                  Có mặt trên thị trường hơn 5 năm qua, Công ty T-Tech là đối
                  tác chiến lược của các Bộ, Ban ngành và công ty trên khắp 64
                  tỉnh thành
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="icon-bx-wraper center m-b40">
              <div class="icon-bx-sm bg-secondry m-b20">
                <span class="icon-cell"
                  ><i class="ti-thumb-up text-primary"></i
                ></span>
              </div>
              <div class="icon-content">
                <h5 class="dlab-tilte text-uppercase">ĐẢM BẢO CHẤT LƯỢNG</h5>
                <p>
                  Để đảm bảo chất lượng của các sản phẩm, T-Tech chú trọng từng
                  bộ phận, chi tiết qua việc sử dụng các linh kiện nhập các nước
                  G7.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="icon-bx-wraper center m-b40">
              <div class="icon-bx-sm bg-secondry m-b20">
                <span class="icon-cell"
                  ><i class="ti-cup text-primary"></i
                ></span>
              </div>
              <div class="icon-content">
                <h5 class="dlab-tilte text-uppercase">GIÁ CẢ CẠNH TRANH</h5>
                <p>
                  Sản phẩm được nhập khẩu và lắp ráp trực tiếp tại T-Tech, vì
                  vậy khách hàng luôn được hưởng giá cả cạnh tranh giảm thiểu
                  30-50% giá xe nhập khẩu nguyên chiếc mà chất lượng không đổi.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="icon-bx-wraper center m-b40">
              <div class="icon-bx-sm bg-secondry m-b20">
                <span class="icon-cell"
                  ><i class="ti-settings text-primary"></i
                ></span>
              </div>
              <div class="icon-content">
                <h5 class="dlab-tilte text-uppercase">
                  DỊCH VỤ HẬU MÃI TỐT NHẤT
                </h5>
                <p>
                  Với đội ngũ công nhân, kỹ sư lành nghề và giàu kinh nghiệm,
                  các sản phẩm sau khi mua của khách hàng sẽ được bảo trì và sửa
                  chữa hoàn toàn miễn phí.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="icon-bx-wraper center m-b10">
              <div class="icon-bx-sm bg-secondry m-b20">
                <span class="icon-cell"
                  ><i class="ti-pie-chart text-primary"></i
                ></span>
              </div>
              <div class="icon-content">
                <h5 class="dlab-tilte text-uppercase">TÍNH ĐA DẠNG</h5>
                <p>
                  Qua hơn 5 năm nghiên cứu và phát triển, T-Tech có một danh mục
                  sản phẩm đa dạng, đáp ứng bất kỳ nhu cầu chuyên biệt nào của
                  khách hàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default {
  name: 'HomePage',
  components: {
    Testimonial,
    ArticleHome,
    ProductHome,
    AboutHome,
    Banner,
  },
  mixins: [CommonMixin, SeoMixin],
}
</script>

<style scoped></style>
