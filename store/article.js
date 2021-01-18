import union from 'lodash/union'
import { LIMIT_PAGE_DEFAULT } from '@/shared/constant/constant'

export const SET_ARTICLE = 'SET_ARTICLE'
export const MAP_ARTICLE = 'MAP_ARTICLE'
export const SET_PARAM = 'SET_PARAM'

export class ArticleParams {
  page = 1
  limit = LIMIT_PAGE_DEFAULT
  category = undefined | String
  search = undefined | String
}
export const state = () => ({
  slugs: [],
  data: {},
  meta: {},
  params: {},
  tags: [],
})

export const mutations = {
  [SET_ARTICLE](state, payload) {
    state.slugs = union(state.slugs, [payload.slug])
    state.data = { ...state.data, [payload.slug]: payload }
  },
  [MAP_ARTICLE](state, payload) {
    const slugMapper = {}
    let tags = []
    state.meta = { ...payload.meta, currentPage: payload.meta?.current_page }
    state.slugs = payload?.datas?.map((article) => {
      slugMapper[article.slug] = article
      tags = [...tags, ...(article.tags || [])]
      return article.slug
    })
    state.data = slugMapper
    state.tags = tags
  },
  [SET_PARAM](state, payload) {
    state.params = payload
  },
}

export const actions = {
  async single({ commit }, slug) {
    const { data } = await this.$repositories.articles.single(slug)
    commit(SET_ARTICLE, data.data)
  },
  async list({ commit }, params) {
    commit(SET_PARAM, params)
    const { data } = await this.$repositories.articles.list(params)
    commit(MAP_ARTICLE, data)
  },
}
