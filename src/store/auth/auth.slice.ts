import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { IUserData } from '../../shared/types/user-data'
import {
  registerRequest,
  loginRequest,
  userInfoRequest,
  userInfoUpdateRequest,
  logoutRequest,
  verificationCodeRequest,
  passwordResetRequest,
} from './auth.operations'

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
      .addCase(registerRequest.fulfilled, (state, action) => {
        state.isAuthenticated = true
        state.user = action.payload.user
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.isAuthenticated = true
        state.user = action.payload.user
      })
      .addCase(userInfoRequest.fulfilled, (state, action) => {
        state.isAuthenticated = true
        state.user = action.payload.user
      })
      .addCase(userInfoUpdateRequest.fulfilled, (state, action) => {
        state.user = action.payload.user
      })
      .addCase(logoutRequest.fulfilled, state => {
        state.isAuthenticated = false
        state.user = null
      })
      .addCase(verificationCodeRequest.fulfilled, state => {
        state.isResettingPassword = true
      })
      .addCase(passwordResetRequest.fulfilled, state => {
        state.isResettingPassword = false
      })
      .addMatcher(
        isAnyOf(
          registerRequest.pending,
          loginRequest.pending,
          userInfoRequest.pending,
          userInfoUpdateRequest.pending,
          logoutRequest.pending,
          verificationCodeRequest.pending,
          passwordResetRequest.pending,
        ),
        state => {
          state.isFetching = true
        }
      )
      .addMatcher(
        isAnyOf(
          registerRequest.fulfilled,
          loginRequest.fulfilled,
          userInfoRequest.fulfilled,
          userInfoUpdateRequest.fulfilled,
          logoutRequest.fulfilled,
          verificationCodeRequest.fulfilled,
          passwordResetRequest.fulfilled,
        ),
        state => {
          state.isFetching = false
          state.error = null
        }
      )
      .addMatcher(
        isAnyOf(
          registerRequest.rejected,
          loginRequest.rejected,
          userInfoRequest.rejected,
          userInfoUpdateRequest.rejected,
          logoutRequest.rejected,
          verificationCodeRequest.rejected,
          passwordResetRequest.rejected,
        ),
        (state, action) => {
          state.isFetching = false

          if (action.payload) {
            state.error = action.payload.message
          } else {
            state.error = 'An unknown error occurred'
          }
        }
      )
  },
})

export const { errorCleared } = authSlice.actions

const authReducer = persistReducer({
  key: 'auth',
  storage,
  whitelist: ['isAuthenticated', 'user'],
}, authSlice.reducer)

export { authReducer }
