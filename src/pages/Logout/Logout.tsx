import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AuthPageLayout } from 'components/AuthPageLayout'
import { Loader } from 'components/Loader'
import { useAppDispatch } from 'store/store'
import { selectIsAuthenticated } from 'store/auth/auth.selectors'
import { logoutRequest } from 'store/auth/auth.operations'
import { REFRESH_TOKEN_KEY } from 'shared/constants'

const Logout = () => {
  const dispatch = useAppDispatch()

  const isAuthenticated = useSelector(selectIsAuthenticated)

  useEffect(() => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)

    if (refreshToken) dispatch(logoutRequest({ refreshToken }))
  }, [dispatch])


  return (
    <AuthPageLayout>
      {isAuthenticated ? <Loader/> : <Navigate to='/login'/>}
    </AuthPageLayout>
  )
}

export default Logout
