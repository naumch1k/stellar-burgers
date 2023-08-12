import axios from '../../shared/helpers/configure-axios'
import type {
  IRegisterRequest,
  ILoginRequest,
  ILogoutRequest,
  IPlaceOrderRequest,
} from './types'

const register = (data: IRegisterRequest ) => axios.post('/auth/register', data)

const login = (data: ILoginRequest) => axios.post('/auth/login', data)

const getUserInfo = () => axios.get('/auth/user')

const logout = ({ refreshToken }: ILogoutRequest) => axios.post('/auth/logout', { token: refreshToken })

const placeOrder = (data: IPlaceOrderRequest) => axios.post('/orders', data)

export const mainApi = {
  register,
  login,
  getUserInfo,
  logout,
  placeOrder,
}
