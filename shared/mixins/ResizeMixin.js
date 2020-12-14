import { mapMutations } from 'vuex'
import { TOGGLE_DEVICE } from '~/store'

export const DeviceType = {
  Desktop: 1,
  Tablet: 2,
  Mobile: 3,
}
const WIDTH_TABLET = 992
const WIDTH_MOBILE = 768

export const ResizeMixin = {
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted() {
    this.toggleDevice(this.detectDevice())
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
  },
  methods: {
    ...mapMutations({
      toggleDevice: TOGGLE_DEVICE,
    }),
    isTablet(rectWidth) {
      return rectWidth > WIDTH_MOBILE && rectWidth < WIDTH_TABLET
    },
    isMobile(rectWidth) {
      return rectWidth - 1 < WIDTH_MOBILE
    },
    detectDevice() {
      const rect = document.body.getBoundingClientRect()
      if (this.isTablet(rect.width)) {
        return DeviceType.Tablet
      } else if (this.isMobile(rect.width)) {
        return DeviceType.Mobile
      } else {
        return DeviceType.Desktop
      }
    },
    resizeHandler() {
      if (!document.hidden) {
        this.toggleDevice(this.detectDevice())
      }
    },
  },
}
