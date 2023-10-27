import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AuthPageLayout } from '../../components/AuthPageLayout'
import { Loader } from '../../components/Loader'
import { selectIsAuthenticated } from '../../store/auth/selectors'
import { useAppDispatch } from '../../store/store'
import { logoutRequest } from '../../store/auth/operations'

const Logout = () => {
  const dispatch = useAppDispatch()

  const isAuthenticated = useSelector(selectIsAuthenticated)

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken')

    if (refreshToken) dispatch(logoutRequest({ refreshToken }))
  }, [dispatch])


  return (
    <AuthPageLayout>
      {isAuthenticated ? <Loader/> : <Navigate to='/login'/>}
    </AuthPageLayout>
  )
}

export default Logout
