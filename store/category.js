import { CommonStatus } from '@/shared/enums/status'
import { CategoryType } from '@/shared/enums/type'
import { flattenChildren } from '@/shared/helper/helper'
import union from 'lodash/union'

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
  listIdsChildrenTypeProduct: (state) => {
    let result = []
    state.idByType[CategoryType.Product]?.forEach((id) => {
      result = union(
        result,
        flattenChildren(state.data[id]).map((child) => child.id)
      )
    })
    return result
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
}

export const mutations = {
  [MAP_CATEGORY](state, payload) {
    const mapper = {}
    state.ids = payload?.datas
      ?.filter((category) => category.status === CommonStatus.Active)
      ?.map((category) => {
        mapper[category.id] = category
        flattenChildren(category).forEach((child) => (mapper[child.id] = child))
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
