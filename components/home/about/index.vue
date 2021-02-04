<template>
  <div class="section-full bg-white content-inner-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 about-contant">
          <div class="m-b20">
            <h2 class="text-uppercase m-t0 m-b10">
              Về<span class="text-primary"> Chúng tôi</span>
            </h2>
            <span class="text-secondry font-16">Sứ mệnh Tiên phong</span>
            <div class="clear"></div>
          </div>
          <p class="m-b30">{{ getProp(aboutUsHome, 'intro') }}</p>
          <div class="row">
            <template v-for="(item, i) in getProp(aboutUsHome, 'info')">
              <div :key="i" class="col-md-4 col-lg-4 col-sm-4 m-b15">
                <div class="icon-bx-wraper bx-style-1 p-tb15 p-lr10 center">
                  <div class="icon-bx-sm radius bg-primary m-b5">
                    <a href="#" class="icon-cell"
                      ><i :class="getProp(item, 'icon')"></i
                    ></a>
                  </div>
                  <div class="icon-content">
                    <h2 class="text-primary m-t20 m-b10">
                      <span class="counter">{{ getProp(item, 'value') }}</span
                      >+
                    </h2>
                    <p>{{ getProp(item, 'title') }}</p>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <nuxt-link to="/bai-viet/gioi-thieu" class="site-button"
            >Xem thêm</nuxt-link
          >
        </div>
        <div class="col-lg-5 about-img">
          <img :src="getProp(aboutUsHome, 'images')" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ABOUT_US_HOME } from '@/store'
import { CommonMixin } from '@/shared/mixins/CommonMixin'
export default {
  name: 'AboutHome',
  mixins: [CommonMixin],
  computed: {
    ...mapGetters({
      aboutUsHome: ABOUT_US_HOME,
    }),
  },
}
</script>

<style scoped></style>
