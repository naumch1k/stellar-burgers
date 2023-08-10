import axios, { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AUTH_API } from '../../shared/constants/main-api'
import type {
  IRegisterRequest,
  ILoginRequest,
  IUserInfoRequest,
  ILogoutRequest,
  IAuthSuccessResponse,
  IAuthFailureResponse,
  IUserInfoSuccessResponse,
} from '../../services/api'

const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<IAuthFailureResponse>;

    if (axiosError.response && axiosError.response.data && axiosError.response.data.message) {
      return { message: axiosError.response.data.message }
    }
  }

  return { message: 'An unknown error occurred' }
}

export const registerRequest = createAsyncThunk<
  IAuthSuccessResponse,
  IRegisterRequest,
  { rejectValue: IAuthFailureResponse }
>(
  'auth/registerRequest',
  async ({ name, email, password }: IRegisterRequest, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${AUTH_API}/auth/register`,
        { name, email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)

export const loginRequest = createAsyncThunk<
  IAuthSuccessResponse,
  ILoginRequest,
  { rejectValue: IAuthFailureResponse }
>(
  'auth/loginRequest',
  async ({ email, password }: ILoginRequest, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${AUTH_API}/auth/login`,
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

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
  IUserInfoRequest,
  { rejectValue: IAuthFailureResponse }
>(
  'auth/getUserInfo',
  async ({ accessToken }: IUserInfoRequest, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${AUTH_API}/auth/user`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${accessToken}`,
          },
        }
      )

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)

export const logoutRequest = createAsyncThunk<
IAuthSuccessResponse,
ILogoutRequest,
{ rejectValue: IAuthFailureResponse }
>(
  'auth/logoutRequest',
  async ({ refreshToken }: ILogoutRequest, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${AUTH_API}/auth/logout`,
        { token: refreshToken },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      // TODO: refactor to use cookies
      localStorage.clear()

      return response.data
    } catch (error) {
      return rejectWithValue(handleAxiosError(error))
    }
  }
)
