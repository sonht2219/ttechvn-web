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
      href="https://w3itexperts.ticksy.com"
      target="_blank"
      class="bt-support-now theme-btn"
      ><i class="ti-headphone-alt"></i><span>Support</span></a
    >
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default {
  components: { Footer, Header },
  head() {
    return {
      script: [
        { src: '/plugins/bootstrap/js/bootstrap.min.js' },
        { src: '/js/common.js', body: true },
      ],
    }
  },
}
</script>
<style></style>
