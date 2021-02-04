<template>
  <div
    class="section-full text-white bg-img-fix content-inner overlay-black-middle"
    :style="{ 'background-image': `url(${imageBg})` }"
  >
    <div class="container">
      <div class="row">
        <template v-for="(item, i) in companyStatus">
          <div :key="i" class="col-lg-3 col-md-6 col-sm-6">
            <div class="dex-box text-primary border-2 counter-box m-b30">
              <h2 class="text-uppercase m-a0 p-a15">
                <i class="fa fa-group m-r20"></i>
                <span class="counter">{{ getProp(item, 'value') }}</span>
              </h2>
              <h5 class="dlab-tilte text-uppercase m-a0">
                <span
                  class="dlab-tilte-inner skew-title bg-primary p-lr15 p-tb10"
                  >{{ getProp(item, 'title') }}</span
                >
              </h5>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { COMPANY_STATUS } from '@/store'
import { CommonMixin } from '@/shared/mixins/CommonMixin'
export default {
  name: 'CompanyStatus',
  mixins: [CommonMixin],
  computed: {
    ...mapGetters({
      companyStatus: COMPANY_STATUS,
    }),
  },
}
</script>

<style scoped></style>
