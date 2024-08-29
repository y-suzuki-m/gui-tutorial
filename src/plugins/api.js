import axios from 'axios'
export const api = axios.create({})

export default {
  install(app) {
    app.config.globalProperties.$api = api
  }
}
