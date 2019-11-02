import axios from './axios'

export default {
  getApi(endpoint) {
    this.setToken()
    return axios.get(`${endpoint}`)
      // .catch((e) => {
      //   throw new Error(`error-message: ${e}`)
      // })
  },
  postApi(endpoint, params) {
    this.setToken()
    return axios.post(`${endpoint}`, params)
      // .catch((e) => {
      //   console.log(e.response)
      //   throw new Error(`error-message: ${e}`)
      // })
  },
  updateApi(endpoint, params = null) {
    this.setToken()
    return axios.put(`${endpoint}`, params)
      // .catch((e) => {
      //   throw new Error(`error-message: ${e}`)
      // })
  },
  deleteApi(endpoint, slug) {
    this.setToken()
    return axios.delete(`${endpoint}/${slug}`)
      // .catch((e) => {
      //   throw new Error(`error-message: ${e}`)
      // })
  },
  deleteNestApi(endpoint) {
    this.setToken()
    return axios.delete(`${endpoint}`)
      .catch((e) => {
        throw new Error(`error-message: ${e}`)
      })
  },
  setToken() {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("token")}`
  }

}
