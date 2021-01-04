import axios from 'axios'

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5 * 1000,
})

const errorHandler = (error) => {
  return Promise.reject(error)
}

http.interceptors.request.use((config) => {
  return config
}, errorHandler)

http.interceptors.response.use((response) => {
  return response
}, errorHandler)

export default http
