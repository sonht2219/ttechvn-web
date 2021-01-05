import { CommonStatus } from '@/shared/enums/status'
import { CategoryType } from '@/shared/enums/type'

export const MAP_CATEGORY = 'MAP_CATEGORY'

export const state = () => ({
  ids: [],
  data: {},
  idByType: {},
})

export const getters = {
  listIdsTypeArticle: (state) => {
    return state.idByType[CategoryType.Article]
  },
  listIdsTypeProduct: (state) => {
    return state.idByType[CategoryType.Product]
  },
  listAllIds: (state) => {
    return state.ids
  },
  listTypeArticle: (state) => {
    return state.idByType[CategoryType.Article]?.map((id) => state.data[id])
  },
  listTypeProduct: (state) => {
    return state.idByType[CategoryType.Product]?.map((id) => state.data[id])
  },
  dataMapper: (state) => {
    return state.data
  },
}

export const mutations = {
  [MAP_CATEGORY](state, payload) {
    const mapper = {}
    state.ids = payload?.datas
      ?.filter((category) => category.status === CommonStatus.Active)
      ?.map((category) => {
        mapper[category.id] = category
        state.idByType[category.type] = [
          ...(state.idByType[category.type] || []),
          category.id,
        ]
        return category.id
      })
    state.data = mapper
  },
}

export const actions = {
  async loadCategories({ commit }) {
    const { data } = await this.$repositories.categories.list()
    commit(MAP_CATEGORY, data)
  },
}
