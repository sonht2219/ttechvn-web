<template>
  <div class="section-full bg-white content-inner">
    <div class="container">
      <div class="section-head text-center">
        <h2 class="text-uppercase">Về chúng tôi</h2>
        <div class="dlab-separator-outer">
          <div class="dlab-separator bg-secondry style-skew"></div>
        </div>
      </div>
      <div class="row">
        <template v-for="(item, i) in aboutTwo">
          <div :key="i" class="col-lg-4 col-md-6 col-sm-6">
            <div class="icon-bx-wraper center m-b40">
              <div class="icon-bx-sm bg-secondry m-b20">
                <span class="icon-cell"
                  ><i :class="getProp(item, 'icon')" class="text-primary"></i
                ></span>
              </div>
              <div class="icon-content">
                <h5 class="dlab-tilte text-uppercase">
                  {{ getProp(item, 'title') }}
                </h5>
                <p>
                  {{ getProp(item, 'description') }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ABOUT_TWO } from '@/store'
import { CommonMixin } from '@/shared/mixins/CommonMixin'
export default {
  name: 'AboutTwo',
  mixins: [CommonMixin],
  computed: {
    ...mapGetters({
      aboutTwo: ABOUT_TWO,
    }),
  },
}
</script>

<style scoped></style>
