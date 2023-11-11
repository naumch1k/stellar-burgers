import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { IUserData } from '../../shared/types/user-data';
import {
  registerRequest,
  loginRequest,
  userInfoRequest,
  userInfoUpdateRequest,
  logoutRequest,
  verificationCodeRequest,
  passwordResetRequest,
} from './operations'

export interface IAuthSliceState {
  isAuthenticated: boolean;
  isFetching: boolean;
  error: string | null;
  user: IUserData | null;
  isResettingPassword: boolean;
}

const initialState: IAuthSliceState = {
  isAuthenticated: false,
  isFetching: false,
  error: null,
  user: null,
  isResettingPassword: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    errorCleared(state) {
      state.error = null
    },
  },
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
        state.error = null
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
      .addCase(userInfoUpdateRequest.pending, state => {
        state.isFetching = true
      })
      .addCase(userInfoUpdateRequest.fulfilled, (state, action) => {
        state.isFetching = false
        state.error = null
        state.user = action.payload.user
      })
      .addCase(userInfoUpdateRequest.rejected, (state, action) => {
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
      .addCase(verificationCodeRequest.pending, state => {
        state.isFetching = true
      })
      .addCase(verificationCodeRequest.fulfilled, state => {
        state.isFetching = false
        state.error = null
        state.isResettingPassword = true
      })
      .addCase(verificationCodeRequest.rejected, (state, action) => {
        state.isFetching = false

        if (action.payload) {
          state.error = action.payload.message
        } else {
          state.error = 'An unknown error occurred'
        }
      })
      .addCase(passwordResetRequest.pending, state => {
        state.isFetching = true
      })
      .addCase(passwordResetRequest.fulfilled, state => {
        state.isFetching = false
        state.error = null
        state.isResettingPassword = false
      })
      .addCase(passwordResetRequest.rejected, (state, action) => {
        state.isFetching = false

        if (action.payload) {
          state.error = action.payload.message
        } else {
          state.error = 'An unknown error occurred'
        }
      })
  },
})

const { actions } = authSlice

const reducer = persistReducer({
  key: 'auth',
  storage,
  whitelist: ['isAuthenticated', 'user'],
}, authSlice.reducer)

export { reducer, actions }
