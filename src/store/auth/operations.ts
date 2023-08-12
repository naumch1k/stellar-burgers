import axios, { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { mainApi } from '../../services/api'
import type {
  IRegisterRequest,
  ILoginRequest,
  ILogoutRequest,
  IAuthSuccessResponse,
  IUserInfoSuccessResponse,
  IMainApiFailureResponse,
} from '../../services/api'

const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<IMainApiFailureResponse>;

    if (axiosError.response && axiosError.response.data && axiosError.response.data.message) {
      return { message: axiosError.response.data.message }
    }
  }

  return { message: 'An unknown error occurred' }
}

export const registerRequest = createAsyncThunk<
  IAuthSuccessResponse,
  IRegisterRequest,
  { rejectValue: IMainApiFailureResponse }
>(
  'auth/registerRequest',
  async (data: IRegisterRequest, { rejectWithValue }) => {
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
  { rejectValue: IMainApiFailureResponse }
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
  { rejectValue: IMainApiFailureResponse }
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

export const logoutRequest = createAsyncThunk<
IAuthSuccessResponse,
ILogoutRequest,
{ rejectValue: IMainApiFailureResponse }
>(
  'auth/logoutRequest',
  async (data: ILogoutRequest, { rejectWithValue }) => {
    try {
      const response = await mainApi.logout(data)

      // TODO: refactor to use cookies
      localStorage.clear()

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)
