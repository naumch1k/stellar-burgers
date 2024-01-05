import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from 'store/auth/auth.selectors'

export const PublicRoute = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)

  return isAuthenticated ? <Navigate to='/builder' replace/> : <Outlet/>
}
