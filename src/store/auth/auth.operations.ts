import { createAsyncThunk } from '@reduxjs/toolkit'
import { mainApi, handleAxiosError } from '../../services/api'
import type {
  ISetUserInfoRequest,
  ILoginRequest,
  ILogoutRequest,
  IVerificationCodeRequest,
  IPasswordResetRequest,
  IAuthSuccessResponse,
  IUserInfoSuccessResponse,
  IPasswordRecoverySuccessResponse,
  IApiFailureResponse,
} from '../../services/api'

export const registerRequest = createAsyncThunk<
  IAuthSuccessResponse,
  ISetUserInfoRequest,
  { rejectValue: IApiFailureResponse }
>(
  'auth/registerRequest',
  async (data: ISetUserInfoRequest, { rejectWithValue }) => {
    try {
      const response = await mainApi.register(data)

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)

export const loginRequest = createAsyncThunk<
  IAuthSuccessResponse,
  ILoginRequest,
  { rejectValue: IApiFailureResponse }
>(
  'auth/loginRequest',
  async (data: ILoginRequest, { rejectWithValue }) => {
    try {
      const response = await mainApi.login(data)

      // TODO: refactor to use cookies
      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('refreshToken', response.data.refreshToken)

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)

export const userInfoRequest = createAsyncThunk<
  IUserInfoSuccessResponse,
  void,
  { rejectValue: IApiFailureResponse }
>(
  'auth/getUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      const response = await mainApi.getUserInfo()

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)

export const userInfoUpdateRequest = createAsyncThunk<
  IUserInfoSuccessResponse,
  ISetUserInfoRequest,
  { rejectValue: IApiFailureResponse }
>(
  'auth/userInfoUpdateRequest',
  async (data: ISetUserInfoRequest, { rejectWithValue }) => {
    try {
      const response = await mainApi.updateUserInfo(data)

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)

export const logoutRequest = createAsyncThunk<
IAuthSuccessResponse,
ILogoutRequest,
{ rejectValue: IApiFailureResponse }
>(
  'auth/logoutRequest',
  async (data: ILogoutRequest, { rejectWithValue }) => {
    try {
      const response = await mainApi.logout(data)

      // TODO: refactor to use cookies
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)

export const verificationCodeRequest = createAsyncThunk<
  IPasswordRecoverySuccessResponse,
  IVerificationCodeRequest,
  { rejectValue: IApiFailureResponse }
>(
  'auth/verificationCodeRequest',
  async (data: IVerificationCodeRequest, { rejectWithValue }) => {
    try {
      const response = await mainApi.requestVerificationCode(data)

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)

export const passwordResetRequest = createAsyncThunk<
  IPasswordRecoverySuccessResponse,
  IPasswordResetRequest,
  { rejectValue: IApiFailureResponse }
>(
  'auth/resetPasswordRequest',
  async (data: IPasswordResetRequest, { rejectWithValue }) => {
    try {
      const response = await mainApi.resetPassword(data)

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)
