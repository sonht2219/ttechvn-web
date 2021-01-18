import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import Pagination from 'vue-pagination-2'
const components = {
  VueSlickCarousel,
  Pagination,
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
