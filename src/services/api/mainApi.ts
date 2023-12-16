import axios from 'shared/helpers/configure-axios'
import type {
  ISetUserInfoRequest,
  ILoginRequest,
  ILogoutRequest,
  IPlaceOrderRequest,
  IVerificationCodeRequest,
  IPasswordResetRequest,
} from './types'

const register = (data: ISetUserInfoRequest ) => axios.post('/auth/register', data)

const login = (data: ILoginRequest) => axios.post('/auth/login', data)

const getUserInfo = () => axios.get('/auth/user')

const updateUserInfo = (data: ISetUserInfoRequest) => axios.patch('/auth/user', data)

const logout = ({ refreshToken }: ILogoutRequest) => axios.post('/auth/logout', { token: refreshToken })

const placeOrder = (data: IPlaceOrderRequest) => axios.post('/orders', data)

const requestVerificationCode = (data: IVerificationCodeRequest) => axios.post('/password-reset', data)

const resetPassword = (data: IPasswordResetRequest) => axios.post('/password-reset/reset', data)

export const mainApi = {
  register,
  login,
  getUserInfo,
  updateUserInfo,
  logout,
  placeOrder,
  requestVerificationCode,
  resetPassword,
}
