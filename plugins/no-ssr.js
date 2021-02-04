import VueLazyLoad from 'vue-lazyload'
import Vue from 'vue'
import LightBox from 'vue-image-lightbox'

const components = {
  LightBox,
}
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
const plugins = {
  VueLazyLoad,
}
Object.entries(plugins).forEach(([name, plugin]) => {
  Vue.use(plugin)
})
