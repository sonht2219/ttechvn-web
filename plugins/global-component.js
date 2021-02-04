import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import Pagination from 'vue-pagination-2'
import VueLazyLoad from 'vue-lazyload'
const components = {
  VueSlickCarousel,
  Pagination,
}

const plugins = {
  VueLazyLoad,
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})

Object.entries(plugins).forEach(([name, plugin]) => {
  Vue.use(plugin)
})
