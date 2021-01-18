<template>
  <div>
    <!-- inner page banner -->
    <inner-banner v-bind="{ title: getProp(article, 'name') }" />
    <!-- inner page banner END -->
    <!-- contact area -->
    <div class="content-area">
      <!-- Left & right section start -->
      <div class="container">
        <!-- Portfolio Details -->
        <div class="clearfix">
          <div id="masonry" class="row dlab-blog-grid-2">
            <div class="post card-container col-lg-12 col-md-12 col-sm-12">
              <div class="blog-post blog-grid">
                <div class="dlab-post-info">
                  <div class="dlab-post-title">
                    <h3 class="post-title" style="text-align: center">
                      <a href="javascript:">{{ getProp(article, 'name') }}</a>
                    </h3>
                  </div>
                  <div v-html="getProp(article, 'content')"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Portfolio Details END -->
      </div>
      <!-- Left & right section  END -->
    </div>
    <!-- contact area  END -->
  </div>
</template>

<script>
import InnerBanner from '@/components/shared/innerbanner/index'
import { CommonMixin } from '@/shared/mixins/CommonMixin'
import { mapActions } from 'vuex'
export default {
  name: 'ArticleDetail',
  components: { InnerBanner },
  mixins: [CommonMixin],
  async fetch() {
    await this.loadSingleArticle(this.$route.params.slug)
  },
  computed: {
    article() {
      return this.$store.state.article.data[this.$route.params.slug]
    },
  },
  methods: {
    ...mapActions({
      singleArticle: 'article/single',
    }),
    async loadSingleArticle(slug) {
      try {
        await this.singleArticle(slug)
      } catch (e) {}
    },
  },
}
</script>

<style scoped></style>
