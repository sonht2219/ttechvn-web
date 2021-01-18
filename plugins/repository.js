import createRepository from '~/api/repository'

export default (ctx, inject) => {
  const initRepository = createRepository(ctx.$axios)
  const repositories = {
    products: initRepository('products'),
    categories: initRepository('categories'),
    tags: initRepository('tags'),
    articles: initRepository('articles'),
  }

  inject('repositories', repositories)
}
