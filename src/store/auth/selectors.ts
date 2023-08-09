import { createSelector } from '@reduxjs/toolkit'
import { IRootState } from '../store'

const selectAuthState = (state: IRootState) => state.auth

const selectIsAuthenticated = (state: IRootState) => state.auth.isAuthenticated

const selectUser = (state: IRootState) => state.auth.user

const selectUserName = createSelector(
  selectUser,
  user => user?.name
)

export {
  selectAuthState,
  selectIsAuthenticated,
  selectUser,
  selectUserName,
}
