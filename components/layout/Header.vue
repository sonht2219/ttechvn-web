<template>
  <header class="site-header header mo-left header-style-1">
    <!-- top bar -->
    <div class="top-bar">
      <div class="container">
        <div class="row d-flex justify-content-between">
          <div class="dlab-topbar-left"></div>
          <div class="dlab-topbar-right">
            <socials :clazz="['social-bx', 'pull-right']">
              <template #li>
                <li>
                  <i class="fa fa-phone text-primary"></i>
                  <strong style="margin-right: 25px">
                    Hotline: {{ getProp(contact, 'phone_number') }}
                  </strong>
                </li>
              </template>
            </socials>
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
              ><img :src="logo" width="200" height="95" alt=""
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
                @click="showSearch = true"
              >
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
          <!-- Quik search -->
          <div
            class="dlab-quik-search bg-primary"
            :class="{ full: showSearch }"
          >
            <input
              v-model="search"
              name="search"
              type="text"
              class="form-control"
              placeholder="Gõ để tìm kiếm sản phẩm"
              @keyup.enter="searchProduct"
            />
            <span id="quik-search-remove" @click="showSearch = false"
              ><i class="fa fa-remove"></i
            ></span>
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
                ><img
                  src="@/assets/images/logo.png"
                  width="193"
                  height="89"
                  alt=""
              /></a>
            </div>
            <ul class="nav navbar-nav nav-style">
              <li :class="{ active: isMatchRoute('/') }">
                <nuxt-link to="/">Trang chủ</nuxt-link>
              </li>
              <li :class="{ active: isMatchRoute('/bai-viet/gioi-thieu') }">
                <nuxt-link :to="`bai-viet/gioi-thieu`">Giới thiệu</nuxt-link>
              </li>
              <li :class="{ active: isMatchRoute('/category') }">
                <a href="javascript:"
                  >Sản phẩm<i class="fa fa-chevron-down"></i
                ></a>
                <ul class="sub-menu">
                  <template v-for="(category, i) in categoriesTypeProduct">
                    <li :key="i">
                      <nuxt-link :to="`/san-pham?category=${category.slug}`"
                        >{{ getProp(category, 'name') }}
                        <i
                          v-if="getProp(category, 'children.length')"
                          class="fa fa-angle-right"
                        ></i
                      ></nuxt-link>
                      <ul v-if="category.children" class="sub-menu">
                        <template v-for="(child, j) in category.children">
                          <li :key="j">
                            <nuxt-link
                              :to="`/san-pham?category=${child.slug}`"
                              >{{ getProp(child, 'name') }}</nuxt-link
                            >
                          </li>
                        </template>
                      </ul>
                    </li>
                  </template>
                </ul>
              </li>
              <template v-for="(itemMenu, i) in extraMenus">
                <li
                  :key="i"
                  :class="{
                    active: isMatchRoute(`/bai-viet?category=${itemMenu.path}`),
                  }"
                >
                  <nuxt-link
                    v-if="itemMenu.isArticle"
                    :to="`bai-viet?category=${itemMenu.path}`"
                    >{{ itemMenu.title }}</nuxt-link
                  >
                  <nuxt-link v-else :to="itemMenu.path">{{
                    itemMenu.title
                  }}</nuxt-link>
                </li>
              </template>
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
import { CONTACT, EXTRA_MENU_LINKS } from '@/store'
import Socials from '@/components/shared/socials/index'

export default {
  name: 'Header',
  components: { Socials },
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
      showSearch: false,
      search: '',
    }
  },
  computed: {
    ...mapState(['device']),
    ...mapGetters({
      categoriesTypeArticle: 'category/listTypeArticle',
      categoriesTypeProduct: 'category/listTypeProduct',
      contact: CONTACT,
      extraMenus: EXTRA_MENU_LINKS,
    }),
  },
  methods: {
    ...mapActions({
      listCategories: 'category/loadCategories',
    }),
    searchProduct() {
      this.$router.push({ path: `/san-pham?search=${this.search}` })
    },
  },
}
</script>

<style scoped></style>
