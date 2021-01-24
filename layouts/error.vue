<template>
  <div class="container">
    <!-- 404 Page -->
    <div class="section-content">
      <div class="row">
        <div class="col-md-12">
          <div class="page-notfound text-center">
            <form method="post">
              <strong>404</strong>
              <h5 class="m-b20 text-uppercase">
                Page <i class="fa fa-exclamation-triangle text-primary"></i> not
                found
              </h5>
              <a href="/" class="site-button-secondry"
                ><span>Về trang chủ</span><i class="fa fa-angle-right m-l15"></i
              ></a>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- 404 Page END -->
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: ['error'],
}
</script>

<style scoped></style>
