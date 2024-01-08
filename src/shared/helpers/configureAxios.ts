import axios from 'axios'
import { MAIN_API_BASE_URL, ACCESS_TOKEN_KEY } from 'shared/constants'

const instance = axios.create({
  baseURL: MAIN_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use(config => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)

  if (accessToken) {
    config.headers['Authorization'] = accessToken
  }

  return config
})

export default instance
