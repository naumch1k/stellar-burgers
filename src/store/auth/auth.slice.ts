import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { IUserData } from 'shared/types'
import {
  registerRequest,
  loginRequest,
  checkUserAccessRequest,
  userInfoUpdateRequest,
  updateTokenRequest,
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
  isCheckingUserAccess: boolean;
  isUpdatingToken: boolean;
}

const initialState: IAuthSliceState = {
  isAuthenticated: false,
  isFetching: false,
  error: null,
  user: null,
  isResettingPassword: false,
  isCheckingUserAccess: false,
  isUpdatingToken: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError(state) {
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
      .addCase(checkUserAccessRequest.pending, (state) => {
        state.isCheckingUserAccess = true
      })
      .addCase(checkUserAccessRequest.fulfilled, (state) => {
        state.isAuthenticated = true
        state.isCheckingUserAccess = false
        state.error = null
      })
      .addCase(checkUserAccessRequest.rejected, (state) => {
        state.isCheckingUserAccess = false
      })
      .addCase(updateTokenRequest.pending, state => {
        state.isUpdatingToken = true
      })
      .addCase(updateTokenRequest.fulfilled, state => {
        state.isUpdatingToken = false
        state.error = null
      })
      .addCase(updateTokenRequest.rejected, (state, action) => {
        state.isAuthenticated = false
        state.isUpdatingToken = false

        if (action.payload) {
          state.error = action.payload.message
        } else {
          state.error = 'An unknown error occurred'
        }
      })
      .addMatcher(
        isAnyOf(
          registerRequest.pending,
          loginRequest.pending,
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

export const { clearError } = authSlice.actions

const authReducer = persistReducer({
  key: 'auth',
  storage,
  whitelist: ['isAuthenticated', 'user'],
}, authSlice.reducer)

export { authReducer }
