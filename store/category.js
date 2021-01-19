import { CommonStatus } from '@/shared/enums/status'
import { CategoryType } from '@/shared/enums/type'
import { flattenChildren } from '@/shared/helper/helper'
import union from 'lodash/union'

export const MAP_CATEGORY = 'MAP_CATEGORY'

export const state = () => ({
  slugs: [],
  data: {},
  slugByType: {},
})

export const getters = {
  listIdsTypeArticle: (state) => {
    return state.slugByType[CategoryType.Article]
  },
  listIdsTypeProduct: (state) => {
    return state.slugByType[CategoryType.Product]
  },
  listIdsChildrenTypeProduct: (state) => {
    let result = []
    state.slugByType[CategoryType.Product]?.forEach((slug) => {
      result = union(
        result,
        flattenChildren(state.data[slug]).map((child) => child.slug)
      )
    })
    return result
  },
  listAllIds: (state) => {
    return state.slugs
  },
  listTypeArticle: (state) => {
    return state.slugByType[CategoryType.Article]?.map(
      (slug) => state.data[slug]
    )
  },
  listTypeProduct: (state) => {
    return state.slugByType[CategoryType.Product]?.map(
      (slug) => state.data[slug]
    )
  },
}

export const mutations = {
  [MAP_CATEGORY](state, payload) {
    const mapper = {}
    state.slugs = payload?.datas
      ?.filter((category) => category.status === CommonStatus.Active)
      ?.map((category) => {
        mapper[category.slug] = category
        flattenChildren(category).forEach(
          (child) => (mapper[child.slug] = child)
        )
        state.slugByType[category.type] = [
          ...(state.slugByType[category.type] || []),
          category.slug,
        ]
        return category.slug
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
