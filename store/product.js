import union from 'lodash/union'
import { LIMIT_PAGE_DEFAULT } from '@/shared/constant/constant'
export const SET_PRODUCT = 'SET_PRODUCT'
export const MAP_PRODUCT = 'MAP_PRODUCT'
export const SET_META = 'SET_META'
export const SET_PARAM = 'SET_PARAM'

export class ProductParams {
  page = 1
  limit = LIMIT_PAGE_DEFAULT
  category = undefined | String
  search = undefined | String
}
export const state = () => ({
  slugs: [],
  data: {},
  meta: {},
  params: new ProductParams(),
  tags: [],
})

export const getters = {
  products: (state) => state.slugs.map((slug) => state.data[slug]),
}

export const mutations = {
  [SET_PRODUCT](state, payload) {
    state.slugs = union(state.slugs, [payload.slug])
    state.data = { ...state.data, [payload.slug]: payload }
  },
  [SET_META](state, payload) {
    state.meta = payload
  },
  [SET_PARAM](state, payload) {
    state.params = payload
  },
  [MAP_PRODUCT](state, payload) {
    const slugMapper = {}
    let tags = []
    state.meta = { ...payload.meta, currentPage: payload.meta?.current_page }
    state.slugs = payload.datas?.map((product) => {
      slugMapper[product.slug] = product
      tags = [...tags, ...(product.tags || [])]
      return product.slug
    })
    state.data = slugMapper
    state.tags = tags
  },
}

export const actions = {
  async single({ commit }, slug) {
    const { data } = await this.$repositories.products.single(slug)
    commit(SET_PRODUCT, data.data)
  },
  async list({ commit }, params) {
    commit(SET_PARAM, params)
    const { data } = await this.$repositories.products.list(params)
    commit(MAP_PRODUCT, data)
  },
}
