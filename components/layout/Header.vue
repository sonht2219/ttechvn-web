<template>
  <header class="site-header header mo-left header-style-1">
    <!-- top bar -->
    <div class="top-bar">
      <div class="container">
        <div class="row d-flex justify-content-between">
          <div class="dlab-topbar-left"></div>
          <div class="dlab-topbar-right">
            <ul class="social-bx list-inline pull-right">
              <li>
                <a href="javascript:void(0);" class="fa fa-facebook"></a>
              </li>
              <li>
                <a href="javascript:void(0);" class="fa fa-twitter"></a>
              </li>
              <li>
                <a href="javascript:void(0);" class="fa fa-linkedin"></a>
              </li>
              <li>
                <a href="javascript:void(0);" class="fa fa-google-plus"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- top bar END-->
    <!-- main header -->
    <div class="sticky-header header-curve main-bar-wraper navbar-expand-lg">
      <div class="main-bar bg-primary clearfix">
        <div class="container clearfix">
          <!-- website logo -->
          <div class="logo-header mostion">
            <nuxt-link to="/"
              ><img src="/images/logo.png" width="193" height="89" alt=""
            /></nuxt-link>
          </div>
          <!-- nav toggle button -->
          <button
            class="navbar-toggler collapsed navicon justify-content-end"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <!-- extra nav -->
          <div class="extra-nav">
            <div class="extra-cell">
              <button
                id="quik-search-btn"
                type="button"
                class="site-button bg-primary-dark"
              >
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
          <!-- Quik search -->
          <div class="dlab-quik-search bg-primary">
            <form action="#">
              <input
                name="search"
                value=""
                type="text"
                class="form-control"
                placeholder="Type to search"
              />
              <span id="quik-search-remove"><i class="fa fa-remove"></i></span>
            </form>
          </div>
          <!-- main nav -->
          <div
            id="navbarNavDropdown"
            class="header-nav navbar-collapse collapse justify-content-end"
            style="width: auto !important"
          >
            <div
              v-if="device !== deviceType.Desktop"
              class="logo-header mostion"
            >
              <a href="index.html"
                ><img src="/images/logo.png" width="193" height="89" alt=""
              /></a>
            </div>
            <ul class="nav navbar-nav nav-style">
              <li :class="{ active: isMatchRoute('/') }">
                <nuxt-link to="/">Trang chủ</nuxt-link>
              </li>
              <li :class="{ active: isMatchRoute('/about') }">
                <nuxt-link to="/about">Giới thiệu</nuxt-link>
              </li>
              <li :class="{ active: isMatchRoute('/category') }">
                <nuxt-link to="/category"
                  >Sản phẩm<i class="fa fa-chevron-down"></i
                ></nuxt-link>
                <ul class="sub-menu">
                  <li>
                    <nuxt-link to="/category"
                      >Máy móc <i class="fa fa-angle-right"></i
                    ></nuxt-link>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/category">Máy móc 1</nuxt-link></li>
                      <li><nuxt-link to="/category">Máy móc 2</nuxt-link></li>
                    </ul>
                  </li>
                  <li>
                    <nuxt-link to="/category"
                      >Xe tải <i class="fa fa-angle-right"></i
                    ></nuxt-link>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/category">Xe tải 1</nuxt-link></li>
                      <li><nuxt-link to="/category">Xe tải 2</nuxt-link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <template v-for="(category, i) in categoriesTypeArticle">
                <li :key="i" :class="{ active: isMatchRoute('/service') }">
                  <nuxt-link to="/service">{{ category.name }}</nuxt-link>
                </li>
              </template>
              <li :class="{ active: isMatchRoute('/contact') }">
                <nuxt-link to="/contact">Liên hệ</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- main header END -->
  </header>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { DeviceType, ResizeMixin } from '@/shared/mixins/ResizeMixin'
import { CommonMixin } from '@/shared/mixins/CommonMixin'

export default {
  name: 'Header',
  mixins: [ResizeMixin, CommonMixin],
  async fetch() {
    try {
      await this.listCategories()
    } catch (e) {
      console.log(e)
    }
  },
  data() {
    return {
      deviceType: DeviceType,
      settings: {
        dots: false,
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        adaptiveHeight: true,
      },
    }
  },
  computed: {
    ...mapState(['device']),
    ...mapGetters({
      categoriesTypeArticle: 'category/listTypeArticle',
      categoriesTypeProduct: 'category/listTypeProduct',
    }),
  },
  methods: {
    ...mapActions({
      listCategories: 'category/loadCategories',
    }),
  },
}
</script>

<style scoped></style>
