import axios from '../../shared/helpers/configure-axios'
import type {
  IRegisterRequest,
  ILoginRequest,
  ILogoutRequest,
  IPlaceOrderRequest,
  IVerificationCodeRequest,
  IPasswordResetRequest,
} from './types'

const register = (data: IRegisterRequest ) => axios.post('/auth/register', data)

const login = (data: ILoginRequest) => axios.post('/auth/login', data)

const getUserInfo = () => axios.get('/auth/user')

const logout = ({ refreshToken }: ILogoutRequest) => axios.post('/auth/logout', { token: refreshToken })

const placeOrder = (data: IPlaceOrderRequest) => axios.post('/orders', data)

const requestVerificationCode = (data: IVerificationCodeRequest) => axios.post('/password-reset', data)

const resetPassword = (data: IPasswordResetRequest) => axios.post('/password-reset/reset', data)

export const mainApi = {
  register,
  login,
  getUserInfo,
  logout,
  placeOrder,
  requestVerificationCode,
  resetPassword,
}
