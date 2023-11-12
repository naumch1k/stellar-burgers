import { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '../../store/store'
import { ingredientsRequest } from '../../store/ingredients/operations'
import { userInfoRequest } from '../../store/auth/operations'
import { selectIsAuthenticated } from '../../store/auth/selectors'

export const ProtectedRoute = () => {
  const dispatch = useAppDispatch()
  const accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
    dispatch(ingredientsRequest())

    if (accessToken) {
      dispatch(userInfoRequest())
    }
  }, [dispatch, accessToken])

  const isAuthenticated = useSelector(selectIsAuthenticated)

  return isAuthenticated ? <Outlet/> : <Navigate to='/login' replace/>
}