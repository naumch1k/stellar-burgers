import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from 'store/auth/auth.selectors'

export const ProtectedRoute = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)

  return isAuthenticated ? <Outlet/> : <Navigate to='/login' replace/>
}
