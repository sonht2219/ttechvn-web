<template>
  <div>
    <!-- inner page banner -->
    <inner-banner v-bind="{ title: 'Sản phẩm' }" />
    <!-- inner page banner END -->
    <!-- Breadcrumb row -->
    <bread-crumb />
    <!-- Breadcrumb row END -->
    <!-- contact area -->
    <div class="section-full content-inner bg-white">
      <!-- Product details -->
      <div class="container woo-entry">
        <div class="row m-b30">
          <div class="col-lg-5 col-md-5">
            <div class="product-gallery on-show-slider">
              <VueSlickCarousel
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
                <div class="item">
                  <div class="mfp-gallery">
                    <div class="dlab-box">
                      <div class="dlab-thum-bx dlab-img-overlay1">
                        <img
                          src="/images/product/item1.jpg"
                          alt=""
                          class="w-100"
                        />
                        <div class="overlay-bx">
                          <div class="overlay-icon overlay-icon-custom">
                            <a
                              class="mfp-link"
                              title="Product Name"
                              href="/images/product/item1.jpg"
                            >
                              <i class="ti-fullscreen"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="mfp-gallery">
                    <div class="dlab-box">
                      <div class="dlab-thum-bx dlab-img-overlay1">
                        <img
                          src="/images/product/item2.jpg"
                          alt=""
                          class="w-100"
                        />
                        <div class="overlay-bx">
                          <div class="overlay-icon overlay-icon-custom">
                            <a
                              class="mfp-link"
                              title="Product Name2"
                              href="/images/product/item2.jpg"
                            >
                              <i class="ti-fullscreen"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="mfp-gallery">
                    <div class="dlab-box">
                      <div class="dlab-thum-bx dlab-img-overlay1">
                        <img
                          src="/images/product/item3.jpg"
                          alt=""
                          class="w-100"
                        />
                        <div class="overlay-bx">
                          <div class="overlay-icon overlay-icon-custom">
                            <a
                              class="mfp-link"
                              title="Product Name3"
                              href="/images/product/item3.jpg"
                            >
                              <i class="ti-fullscreen"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="mfp-gallery">
                    <div class="dlab-box">
                      <div class="dlab-thum-bx dlab-img-overlay1">
                        <img
                          src="/images/product/item4.jpg"
                          alt=""
                          class="w-100"
                        />
                        <div class="overlay-bx">
                          <div class="overlay-icon overlay-icon-custom">
                            <a
                              class="mfp-link"
                              title="Product Name4"
                              href="/images/product/item4.jpg"
                            >
                              <i class="ti-fullscreen"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="mfp-gallery">
                    <div class="dlab-box">
                      <div class="dlab-thum-bx dlab-img-overlay1">
                        <img
                          src="/images/product/item5.jpg"
                          alt=""
                          class="w-100"
                        />
                        <div class="overlay-bx">
                          <div class="overlay-icon overlay-icon-custom">
                            <a
                              class="mfp-link"
                              title="Product Name5"
                              href="/images/product/item5.jpg"
                            >
                              <i class="ti-fullscreen"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </VueSlickCarousel>

              <VueSlickCarousel
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
                <div class="item">
                  <div class="dlab-media dlab-media-custom">
                    <img src="/images/product/thumb/item1.jpg" alt="" />
                  </div>
                </div>
                <div class="item">
                  <div class="dlab-media dlab-media-custom">
                    <img src="/images/product/thumb/item2.jpg" alt="" />
                  </div>
                </div>
                <div class="item">
                  <div class="dlab-media dlab-media-custom">
                    <img src="/images/product/thumb/item3.jpg" alt="" />
                  </div>
                </div>
                <div class="item">
                  <div class="dlab-media dlab-media-custom">
                    <img src="/images/product/thumb/item4.jpg" alt="" />
                  </div>
                </div>
                <div class="item">
                  <div class="dlab-media dlab-media-custom">
                    <img src="/images/product/thumb/item5.jpg" alt="" />
                  </div>
                </div>
              </VueSlickCarousel>
            </div>
          </div>
          <div class="col-lg-7 col-md-7">
            <div class="sticky-top">
              <form method="post" class="cart">
                <div class="dlab-post-title">
                  <h2 class="post-title"><a href="#">Product name</a></h2>
                  <p class="m-b10">
                    There are many variations of passages of Lorem Ipsum
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic.
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
                <div class="row">
                  <div class="m-b30 col-lg-6 col-md-6 col-sm-6">
                    <h6>Số lượng</h6>
                    <div class="quantity btn-quantity style-1">
                      <input
                        id="demo_vertical2"
                        type="text"
                        value="1"
                        name="demo_vertical2"
                      />
                    </div>
                  </div>
                </div>
                <button class="site-button radius-no">
                  <i class="ti-shopping-cart"></i> Add To Cart
                </button>
              </form>
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
                <!--                <li class="nav-item">-->
                <!--                  <a-->
                <!--                    data-toggle="tab"-->
                <!--                    class="nav-link"-->
                <!--                    href="#graphic-design-1"-->
                <!--                  >-->
                <!--                    <i class="fa fa-photo"></i> Additional Information</a-->
                <!--                  >-->
                <!--                </li>-->
                <!--                <li class="nav-item">-->
                <!--                  <a data-toggle="tab" class="nav-link" href="#developement-1">-->
                <!--                    <i class="fa fa-cog"></i> Product Review</a-->
                <!--                  >-->
                <!--                </li>-->
              </ul>
              <div class="tab-content">
                <div id="web-design-1" class="tab-pane active">
                  <p class="m-b10">
                    Suspendisse et justo. Praesent mattis commyolk augue Aliquam
                    ornare hendrerit augue Cras tellus In pulvinar lectus a est
                    Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit. Suspendisse et justo.
                    Praesent mattis commyolk augue aliquam ornare augue.
                  </p>
                  <p>
                    "But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences
                  </p>
                  <ul class="list-check-circle primary">
                    <li>
                      "But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and
                    </li>
                    <li>
                      There are many variations of passages of Lorem Ipsum
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </li>
                  </ul>
                </div>
                <div id="graphic-design-1" class="tab-pane">
                  <table class="table table-bordered">
                    <tr>
                      <td>Size</td>
                      <td>Small, Medium & Large</td>
                    </tr>
                    <tr>
                      <td>Color</td>
                      <td>Pink & White</td>
                    </tr>
                    <tr>
                      <td>Rating</td>
                      <td>
                        <span class="rating-bx">
                          <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-o"></i>
                          <i class="fa fa-star-o"></i>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Waist</td>
                      <td>26 cm</td>
                    </tr>
                    <tr>
                      <td>Length</td>
                      <td>40 cm</td>
                    </tr>
                    <tr>
                      <td>Chest</td>
                      <td>33 inches</td>
                    </tr>
                    <tr>
                      <td>Fabric</td>
                      <td>Cotton, Silk & Synthetic</td>
                    </tr>
                    <tr>
                      <td>Warranty</td>
                      <td>3 Months</td>
                    </tr>
                    <tr>
                      <td>Chest</td>
                      <td>33 inches</td>
                    </tr>
                  </table>
                </div>
                <div id="developement-1" class="tab-pane">
                  <div id="comments">
                    <ol class="commentlist">
                      <li class="comment">
                        <div class="comment_container">
                          <img
                            class="avatar avatar-60 photo"
                            src="/images/testimonials/pic1.jpg"
                            alt=""
                          />
                          <div class="comment-text">
                            <div class="star-rating">
                              <div data-rating="3">
                                <i
                                  class="fa fa-star"
                                  data-alt="1"
                                  title="regular"
                                ></i>
                                <i
                                  class="fa fa-star"
                                  data-alt="2"
                                  title="regular"
                                ></i>
                                <i
                                  class="fa fa-star-o"
                                  data-alt="3"
                                  title="regular"
                                ></i>
                                <i
                                  class="fa fa-star-o"
                                  data-alt="4"
                                  title="regular"
                                ></i>
                                <i
                                  class="fa fa-star-o"
                                  data-alt="5"
                                  title="regular"
                                ></i>
                              </div>
                            </div>
                            <p class="meta">
                              <strong class="author">Cobus Bester</strong>
                              <span
                                ><i class="fa fa-clock-o"></i> March 7,
                                2013</span
                              >
                            </p>
                            <div class="description">
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="comment">
                        <div class="comment_container">
                          <img
                            class="avatar avatar-60 photo"
                            src="/images/testimonials/pic2.jpg"
                            alt=""
                          />
                          <div class="comment-text">
                            <div class="star-rating">
                              <div data-rating="3">
                                <i
                                  class="fa fa-star"
                                  data-alt="1"
                                  title="regular"
                                ></i>
                                <i
                                  class="fa fa-star"
                                  data-alt="2"
                                  title="regular"
                                ></i>
                                <i
                                  class="fa fa-star"
                                  data-alt="3"
                                  title="regular"
                                ></i>
                                <i
                                  class="fa fa-star-o"
                                  data-alt="4"
                                  title="regular"
                                ></i>
                                <i
                                  class="fa fa-star-o"
                                  data-alt="5"
                                  title="regular"
                                ></i>
                              </div>
                            </div>
                            <p class="meta">
                              <strong class="author">Cobus Bester</strong>
                              <span
                                ><i class="fa fa-clock-o"></i> March 7,
                                2013</span
                              >
                            </p>
                            <div class="description">
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="comment">
                        <div class="comment_container">
                          <img
                            class="avatar avatar-60 photo"
                            src="/images/testimonials/pic3.jpg"
                            alt=""
                          />
                          <div class="comment-text">
                            <div class="star-rating">
                              <div data-rating="3">
                                <i
                                  class="fa fa-star"
                                  data-alt="1"
                                  title="regular"
                                ></i>
                                <i
                                  class="fa fa-star"
                                  data-alt="2"
                                  title="regular"
                                ></i>
                                <i
                                  class="fa fa-star"
                                  data-alt="3"
                                  title="regular"
                                ></i>
                                <i
                                  class="fa fa-star"
                                  data-alt="4"
                                  title="regular"
                                ></i>
                                <i
                                  class="fa fa-star-o"
                                  data-alt="5"
                                  title="regular"
                                ></i>
                              </div>
                            </div>
                            <p class="meta">
                              <strong class="author">Cobus Bester</strong>
                              <span
                                ><i class="fa fa-clock-o"></i> March 7,
                                2013</span
                              >
                            </p>
                            <div class="description">
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div id="review_form_wrapper">
                    <div id="review_form">
                      <div id="respond" class="comment-respond">
                        <h3 id="reply-title" class="comment-reply-title">
                          Add a review
                        </h3>
                        <form class="comment-form" method="post">
                          <div class="comment-form-author">
                            <label>Name <span class="required">*</span></label>
                            <input
                              id="author"
                              type="text"
                              aria-required="true"
                              size="30"
                              value=""
                              name="author"
                            />
                          </div>
                          <div class="comment-form-email">
                            <label>Email <span class="required">*</span></label>
                            <input
                              id="email"
                              type="text"
                              aria-required="true"
                              size="30"
                              value=""
                              name="email"
                            />
                          </div>
                          <div class="comment-form-rating">
                            <label class="float-left m-r10">Your Rating</label>
                            <div class="starrr"></div>
                            <section class="rating-widget">
                              <!-- Rating Stars Box -->
                              <div class="rating-stars">
                                <ul id="stars">
                                  <li class="star" title="Poor" data-value="1">
                                    <i class="fa fa-star fa-fw"></i>
                                  </li>
                                  <li class="star" title="Fair" data-value="2">
                                    <i class="fa fa-star fa-fw"></i>
                                  </li>
                                  <li class="star" title="Good" data-value="3">
                                    <i class="fa fa-star fa-fw"></i>
                                  </li>
                                  <li
                                    class="star"
                                    title="Excellent"
                                    data-value="4"
                                  >
                                    <i class="fa fa-star fa-fw"></i>
                                  </li>
                                  <li
                                    class="star"
                                    title="WOW!!!"
                                    data-value="5"
                                  >
                                    <i class="fa fa-star fa-fw"></i>
                                  </li>
                                </ul>
                              </div>
                            </section>
                          </div>
                          <div class="comment-form-comment">
                            <label>Your Review</label>
                            <textarea
                              id="comment"
                              aria-required="true"
                              rows="8"
                              cols="45"
                              name="comment"
                            ></textarea>
                          </div>
                          <div class="form-submit">
                            <input
                              id="submit"
                              type="submit"
                              value="Submit"
                              class="site-button"
                              name="submit"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h5 class="m-b20">Sản phẩm khác</h5>
            <VueSlickCarousel
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
              <product-item-large
                v-bind="{
                  name: 'Product Title',
                  image: '/images/product/item1.jpg',
                }"
              />
              <product-item-large
                v-bind="{
                  name: 'Product Title',
                  image: '/images/product/item1.jpg',
                }"
              />
              <product-item-large
                v-bind="{
                  name: 'Product Title',
                  image: '/images/product/item1.jpg',
                }"
              />
              <product-item-large
                v-bind="{
                  name: 'Product Title',
                  image: '/images/product/item1.jpg',
                }"
              />
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
import BreadCrumb from '@/components/shared/breadcrumb/index'
import ProductItemLarge from '@/components/shared/productitemlg/index'
import ProductService from '@/components/shared/productservice/index'

export default {
  name: 'Product',
  components: { ProductService, ProductItemLarge, BreadCrumb, InnerBanner },
  mixins: [CommonMixin],
  data: () => ({
    show: 1,
  }),
  mounted() {
    this.show = 4
  },
}
</script>

<style scoped></style>
