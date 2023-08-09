import { createSlice } from '@reduxjs/toolkit'
import { IUserData } from '../../shared/types/user-data';
import {
  registerRequest,
  loginRequest,
  userInfoRequest,
  logoutRequest,
} from './operations'

export interface IAuthSliceState {
  isAuthenticated: boolean;
  isFetching: boolean;
  error: string | null;
  user: IUserData | null;
}

const initialState: IAuthSliceState = {
  isAuthenticated: false,
  isFetching: false,
  error: null,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerRequest.pending, state => {
        state.isFetching = true
      })
      .addCase(registerRequest.fulfilled, (state, action) => {
        state.isAuthenticated = true
        state.isFetching = false
        state.error = null
        state.user = action.payload.user
      })
      .addCase(registerRequest.rejected, (state, action) => {
          state.isFetching = false

          if (action.payload) {
            state.error = action.payload.message
          } else {
            state.error = 'An unknown error occurred'
          }
      })
      .addCase(loginRequest.pending, state => {
        state.isFetching = true
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.isAuthenticated = true
        state.isFetching = false
        state.error = null
        state.user = action.payload.user
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.isFetching = false

        if (action.payload) {
          state.error = action.payload.message
        } else {
          state.error = 'An unknown error occurred'
        }
      })
      .addCase(userInfoRequest.pending, state => {
        state.isFetching = true
      })
      .addCase(userInfoRequest.fulfilled, (state, action) => {
        state.isAuthenticated = true
        state.isFetching = false
        state.user = action.payload.user
      })
      .addCase(userInfoRequest.rejected, (state, action) => {
        state.isFetching = false

        if (action.payload) {
          state.error = action.payload.message
        } else {
          state.error = 'An unknown error occurred'
        }
      })
      .addCase(logoutRequest.pending, state => {
        state.isFetching = true
      })
      .addCase(logoutRequest.fulfilled, state => {
        state.isAuthenticated = false
        state.isFetching = false
        state.user = null
      })
      .addCase(logoutRequest.rejected, (state, action) => {
        state.isFetching = false

        if (action.payload) {
          state.error = action.payload.message
        } else {
          state.error = 'An unknown error occurred'
        }
      })
  },
})

export const { reducer, actions } = authSlice
