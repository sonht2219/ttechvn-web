export default ($axios) => (resource) => ({
  list(params = null) {
    return $axios.get(`${resource}`, { params })
  },
  single(id) {
    return $axios.get(`${resource}/${id}`)
  },
})
