<template>
  <div
    class="section-full overlay-black-middle bg-img-fix content-inner-1"
    :style="{ 'background-image': `url(${imageBg})` }"
  >
    <div class="container">
      <div class="section-head text-white text-center">
        <h2 class="text-uppercase">Mọi người nói về chúng tôi</h2>
        <div class="dlab-separator-outer">
          <div class="dlab-separator bg-white style-skew"></div>
        </div>
      </div>
      <div class="section-content">
        <VueSlickCarousel
          v-if="testimonials.length"
          v-bind="vueSlickMultipleSlideSetting(false, false, true, 2, 2, 1, 1)"
          class="testimonial-four owl-carousel owl-none owl-theme owl-dots-white-full"
        >
          <say-people-item
            v-for="(testimonial, i) in testimonials"
            :key="i"
            :say-people="testimonial"
          />
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import SayPeopleItem from '@/components/shared/saypeopleitem/index'
import { CommonMixin } from '@/shared/mixins/CommonMixin'
import { mapGetters } from 'vuex'
import { TESTIMONIAL } from '@/store'

export default {
  name: 'Testimonial',
  components: { SayPeopleItem },
  mixins: [CommonMixin],
  computed: {
    ...mapGetters({
      testimonials: TESTIMONIAL,
    }),
  },
}
</script>

<style scoped></style>
