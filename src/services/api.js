import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mejorconsalud.com'
})

export default api;