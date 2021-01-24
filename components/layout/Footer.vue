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
              <p class="intro-text-footer">
                {{ getProp(aboutUsHome, 'intro') }}
              </p>
              <socials />
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 footer-col-4">
            <div class="widget recent-posts-entry">
              <h4 class="m-b15 text-uppercase">Bài viết</h4>
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
              <h4 class="m-b15 text-uppercase">Danh mục</h4>
              <div class="dlab-separator-outer m-b10">
                <div class="dlab-separator bg-white style-skew"></div>
              </div>
              <ul>
                <template v-for="(category, i) in listCategoryProduct">
                  <li :key="i">
                    <nuxt-link :to="`/san-pham?category=${category.slug}`">{{
                      getProp(category, 'name')
                    }}</nuxt-link>
                  </li>
                </template>
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
                  <i class="ti-location-pin"></i><strong>Địa chỉ</strong>
                  {{ getProp(contact, 'address') }}
                </li>
                <li>
                  <i class="ti-mobile"></i><strong>Điện thoại</strong>
                  {{ getProp(contact, 'phone_number') }}
                </li>
                <li>
                  <i class="ti-email"></i><strong>Email</strong>
                  {{ getProp(contact, 'email') }}
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
            <nuxt-link to="/bai-viet/gioi-thieu" href="about-1.html">
              Giới thiệu</nuxt-link
            >
            <nuxt-link to="/lien-he"> Liên hệ</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import ArticleItemSmall from '@/components/shared/articleitemsm/index'
import { mapState, mapGetters, mapActions } from 'vuex'
import { CommonMixin } from '@/shared/mixins/CommonMixin'
import { ArticleParams } from '@/store/article'
import { ABOUT_US_HOME, CONTACT } from '@/store'
import Socials from '@/components/shared/socials/index'
export default {
  name: 'Footer',
  components: { Socials, ArticleItemSmall },
  mixins: [CommonMixin],
  async fetch() {
    if (!this.articleSlugs.length) {
      await this.listArticle({ ...new ArticleParams(), limit: 3 })
    }
  },
  computed: {
    ...mapState({
      articleSlugs: (state) => state.article.slugs,
    }),
    ...mapGetters({
      listCategoryProduct: 'category/listTypeProduct',
      contact: CONTACT,
      aboutUsHome: ABOUT_US_HOME,
    }),
  },
  methods: {
    ...mapActions({
      listArticle: 'article/list',
    }),
  },
}
</script>

<style scoped></style>
