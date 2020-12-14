import { DeviceType } from '~/shared/mixins/ResizeMixin'

export const TOGGLE_DEVICE = 'TOGGLE_DEVICE'
export const state = () => ({
  device: DeviceType.Desktop,
})

export const mutations = {
  [TOGGLE_DEVICE](state, device) {
    state.device = device
  },
}
