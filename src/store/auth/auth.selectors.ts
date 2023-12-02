import { createSelector } from '@reduxjs/toolkit'
import { IRootState } from '../store'

export const selectAuthState = (state: IRootState) => state.auth

export const selectIsAuthenticated = (state: IRootState) => state.auth.isAuthenticated

export const selectUser = (state: IRootState) => state.auth.user

export const selectUserName = createSelector(
  selectUser,
  user => user?.name
)
