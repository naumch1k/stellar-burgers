import axios from 'axios'
import { MAIN_API } from '../constants/mainApi'

const instance = axios.create({
  baseURL: MAIN_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken')

  if (accessToken) {
    config.headers['Authorization'] = accessToken
  }

  return config
})

export default instance
