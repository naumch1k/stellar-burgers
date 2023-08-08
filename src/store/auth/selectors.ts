import { IRootState } from '../store'

const selectAuthState = (state: IRootState) => state.auth

const selectIsAuthenticated = (state: IRootState) => state.auth.isAuthenticated

export {
  selectAuthState,
  selectIsAuthenticated,
}
