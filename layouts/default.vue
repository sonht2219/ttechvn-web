<template>
  <div class="page-wraper">
    <!-- header -->
    <Header />
    <!-- header END -->
    <!-- Content -->
    <div class="page-content">
      <Nuxt />
    </div>
    <!-- Content END-->
    <!-- Footer -->
    <Footer />
    <!-- Footer END-->
    <!-- scroll top button -->
    <button class="scroltop fa fa-arrow-up style5"></button>
    <a
      :href="`tel:${getProp(contact, 'phone_number')}`"
      class="bt-support-now theme-btn"
      ><i class="ti-headphone-alt"></i
      ><span>{{ getProp(contact, 'phone_number') }}</span></a
    >
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { mapActions, mapGetters } from 'vuex'
import { CommonMixin } from '@/shared/mixins/CommonMixin'
import { CONTACT } from '@/store'

export default {
  components: { Footer, Header },
  mixins: [CommonMixin],
  async fetch() {
    try {
      await this.getSystemConfigs()
    } catch (e) {
      this.throwError('error')
    }
  },
  computed: {
    ...mapGetters({
      contact: CONTACT,
    }),
  },
  methods: {
    ...mapActions({
      getSystemConfigs: 'getSystemConfigs',
    }),
  },
}
</script>
<style></style>
