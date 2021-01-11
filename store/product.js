import union from 'lodash/union'
export const SET_PRODUCT = 'SET_PRODUCT'
export const MAP_PRODUCT = 'MAP_PRODUCT'

export const state = () => ({
  ids: [],
  data: {},
  meta: {},
})

export const getters = {
  products: (state) => state.ids.map((id) => state.data[id]),
}

export const mutations = {
  [SET_PRODUCT](state, payload) {
    state.ids = union(state.ids, [payload.id])
    state.data = { ...state.data, [payload.id]: payload }
  },
  [MAP_PRODUCT](state, payload) {
    const idMapper = {}
    state.meta = payload.meta
    state.ids = payload.datas?.map((product) => {
      idMapper[product.id] = product
      return product.id
    })
    state.data = idMapper
  },
}

export const actions = {
  async single({ commit }, slug) {
    const { data } = await this.$repositories.products.single(slug)
    commit(SET_PRODUCT, data.data)
  },
  async list({ commit }, params) {
    const { data } = await this.$repositories.products.list(params)
    commit(MAP_PRODUCT, data)
  },
}
