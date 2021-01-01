import get from 'lodash/get'
export const CommonMixin = {
  data: () => ({
    productServices: [
      {
        icon: 'ti-truck',
        title: 'Giao hàng',
        description: 'Miễn phí giao hàng toàn quốc',
      },
      {
        icon: 'ti-bag',
        title: 'Sản phẩm',
        description: 'Cam kết sản phẩm chính hãng',
      },
      {
        icon: 'ti-settings',
        title: 'Bảo hành',
        description: 'Bảo hành lên đến 36 tháng',
      },
    ],
    sayPeoples: [
      {
        image: 'images/testimonials/pic1-img.jpg',
        content:
          'There are many variations of passages of Lorem Ipsum\n' +
          '                    typesetting industry has been the standard dummy text ever\n' +
          '                    since the when printer.',
        people: 'Hoàng Sơn',
        job: 'Giám đốc',
      },
      {
        image: 'images/testimonials/pic1-img.jpg',
        content:
          'There are many variations of passages of Lorem Ipsum\n' +
          '                    typesetting industry has been the standard dummy text ever\n' +
          '                    since the when printer.',
        people: 'Hoàng Sơn',
        job: 'Giám đốc',
      },
      {
        image: 'images/testimonials/pic1-img.jpg',
        content:
          'There are many variations of passages of Lorem Ipsum\n' +
          '                    typesetting industry has been the standard dummy text ever\n' +
          '                    since the when printer.',
        people: 'Hoàng Sơn',
        job: 'Giám đốc',
      },
    ],
  }),
  methods: {
    getProp: get,
    isMatchRoute(path) {
      return this.$route.path === path
    },
    vueSlickMultipleSlideSetting(
      dots,
      arrows,
      autoplay,
      slidesToShow,
      slidesToShow1024,
      slidesToShow768,
      slidesToShow575
    ) {
      return {
        dots,
        arrows,
        focusOnSelect: true,
        infinite: true,
        autoplay,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow,
        slidesToScroll: 1,
        touchThreshold: 5,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: slidesToShow1024,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: slidesToShow768,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: slidesToShow575,
              slidesToScroll: 1,
            },
          },
        ],
      }
    },
  },
}
