import type { Middleware, MiddlewareAPI } from 'redux'
import { AppDispatch, IRootState } from 'store/store'
import { updateTokenRequest } from 'store/auth/auth.operations'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from 'shared/constants'

const authMiddleware = (): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, IRootState>) => {
    const { dispatch } = store

    return next => action => {
      if (action.type === 'auth/checkUserAccessRequest/rejected') {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)
        const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)

        // No refreshToken and accessToken means first-time or logged-out users.
        // Early return doesn't trigger updateTokenRequest and won't display an error.
        if (!refreshToken && !accessToken) return next(action)

        // If refreshToken, attempt to refresh accessToken.
        if (refreshToken) {
          dispatch(updateTokenRequest({ refreshToken }))
        } else {
          // If no refreshToken and accessToken expired (otherwise, we won't get here),
          // intentionally trigger a server error to initiate a logout.
          dispatch(updateTokenRequest({ refreshToken: '' }))
        }
      }

      return next(action)
    }
  }
}

export default authMiddleware
