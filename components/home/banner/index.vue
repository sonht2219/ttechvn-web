<template>
  <div class="main-slider style-two default-banner">
    <div class="tp-banner-container">
      <div class="tp-banner">
        <div
          id="rev_slider_1014_1_wrapper"
          class="rev_slider_wrapper fullscreen-container"
        >
          <div id="rev_slider_1014_1" class="rev_slider fullscreenbanner">
            <VueSlickCarousel
              v-if="banners.length"
              class="slick-main"
              v-bind="vueSlickMultipleSlideSetting(false, true, true, 1, 1, 1)"
            >
              <template v-for="(banner, i) in banners">
                <a
                  :key="i"
                  :href="getProp(banner, 'navigate_to')"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    :src="getProp(banner, 'image_url')"
                    :alt="getProp(banner, 'title')"
                    class="slick-img"
                  />
                </a>
              </template>
            </VueSlickCarousel>
            <div
              class="tp-bannertimer tp-bottom"
              style="visibility: hidden !important"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CommonMixin } from '@/shared/mixins/CommonMixin'

export default {
  name: 'Banner',
  mixins: [CommonMixin],
  async fetch() {
    try {
      const { data } = await this.$repositories.banners.list()
      this.banners = data.datas
    } catch (e) {}
  },
  data: () => ({
    banners: [],
  }),
}
</script>

<style scoped></style>
