import { createAsyncThunk } from '@reduxjs/toolkit'
import { mainApi, handleAxiosError } from 'services/api'
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
  IUpdateTokenRequest,
} from 'services/api'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from 'shared/constants'

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

      localStorage.setItem(ACCESS_TOKEN_KEY, response.data.accessToken)
      localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refreshToken)

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)

export const checkUserAccessRequest = createAsyncThunk(
  'auth/checkUserAccessRequest',
  async (_, { rejectWithValue }) => {
    try {
      await mainApi.checkUserAccess()
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

export const updateTokenRequest = createAsyncThunk<
IAuthSuccessResponse,
IUpdateTokenRequest,
{ rejectValue: IApiFailureResponse }
>(
  'auth/updateTokenRequest',
  async (data: IUpdateTokenRequest, { rejectWithValue }) => {
    try {
      const response = await mainApi.updateToken(data)

      localStorage.setItem(ACCESS_TOKEN_KEY, response.data.accessToken)
      localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refreshToken)

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

      localStorage.removeItem(ACCESS_TOKEN_KEY)
      localStorage.removeItem(REFRESH_TOKEN_KEY)

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
