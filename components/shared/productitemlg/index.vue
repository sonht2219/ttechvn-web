<template>
  <div class="item">
    <div class="item-box">
      <div class="item-img">
        <img :src="image" alt="" />
        <div class="item-info-in item-info-in-custom">
          <ul>
            <li>
              <a href="#"><i class="ti-shopping-cart"></i></a>
            </li>
            <li>
              <a href="#"><i class="ti-eye"></i></a>
            </li>
            <li>
              <a href="#"><i class="ti-heart"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="item-info text-center text-black p-a10">
        <h6 class="item-title text-uppercase font-weight-500">
          <a href="#">{{ name }}</a>
        </h6>
        <ul class="item-review">
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star-half-o"></i></li>
          <li><i class="fa fa-star-o"></i></li>
        </ul>
        <h4 class="item-price">
          <span class="text-primary">Giá: Liên hệ</span>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItemLarge',
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
