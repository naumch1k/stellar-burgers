import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../../store/auth/selectors'

interface IProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: IProtectedRouteProps) => {
  const isAuthenticated = useSelector(selectIsAuthenticated)

  return isAuthenticated ? children : <Navigate to='/login' replace/>
}
