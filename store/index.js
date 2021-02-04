import { DeviceType } from '~/shared/mixins/ResizeMixin'

export const TOGGLE_DEVICE = 'TOGGLE_DEVICE'
export const SET_SYSTEM_CONFIGS = 'SET_SYSTEM_CONFIGS'
// key config
export const ABOUT_US_HOME = 'ABOUT_US_HOME'
export const APP_NAME = 'APP_NAME'
export const CONTACT = 'CONTACT'
export const EXTRA_MENU_LINKS = 'EXTRA_MENU_LINKS'
export const FAVICON = 'FAVICON'
export const LOGO = 'LOGO'
export const NOTIFY_EMAIL = 'NOTIFY_EMAIL'
export const TESTIMONIAL = 'TESTIMONIAL'
export const COMPANY_STATUS = 'COMPANY_STATUS'
export const ABOUT_TWO = 'ABOUT_TWO'
// end key config
export const state = () => ({
  device: DeviceType.Desktop,
  systemConfigs: {},
})
export const getters = {
  [ABOUT_US_HOME]: (state) => state.systemConfigs[ABOUT_US_HOME],
  [APP_NAME]: (state) => state.systemConfigs[APP_NAME],
  [CONTACT]: (state) => state.systemConfigs[CONTACT],
  [EXTRA_MENU_LINKS]: (state) => state.systemConfigs[EXTRA_MENU_LINKS],
  [FAVICON]: (state) => state.systemConfigs[FAVICON],
  [LOGO]: (state) => state.systemConfigs[LOGO],
  [NOTIFY_EMAIL]: (state) => state.systemConfigs[NOTIFY_EMAIL],
  [TESTIMONIAL]: (state) => state.systemConfigs[TESTIMONIAL],
  [COMPANY_STATUS]: (state) => state.systemConfigs[COMPANY_STATUS],
  [ABOUT_TWO]: (state) => state.systemConfigs[ABOUT_TWO],
}
export const mutations = {
  [TOGGLE_DEVICE](state, device) {
    state.device = device
  },
  [SET_SYSTEM_CONFIGS](state, payload) {
    const keyMapper = {}
    payload?.map((config) => {
      keyMapper[config?.id] = config?.value
    })
    state.systemConfigs = keyMapper
  },
}

export const actions = {
  async getSystemConfigs({ commit }) {
    const { data } = await this.$repositories.systemConfigs.list()
    commit(SET_SYSTEM_CONFIGS, data.datas)
  },
}
