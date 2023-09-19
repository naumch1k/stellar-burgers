import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from '../protected-route'
import Main from '../../pages/main/main'
import Login from '../../pages/login/login'
import Register from '../../pages/register/register'
import ForgotPassword from '../../pages/forgot-password/forgot-password'
import ResetPassword from '../../pages/reset-password/reset-password'
import Feed from '../../pages/feed'
import Profile from '../../pages/profile'
import Order from '../../pages/order'
import { Page } from '../../components/page'
import { Header } from '../../components/header'
import { ProfilePageForm } from '../profile-page-form/profile-page-form'
import { OrdersList } from '../orders-list'
import Logout from '../../pages/logout/logout'
import { useAppDispatch } from '../../store/store'
import { ingredientsRequest } from '../../store/ingredients/operations'
import { userInfoRequest } from '../../store/auth/operations'

export const App = () => {
  const dispatch = useAppDispatch()
  const accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
    dispatch(ingredientsRequest())

    if (accessToken) {
      dispatch(userInfoRequest())
    }
  }, [dispatch, accessToken])

  return (
    <Page>
      <Page.Header>
        <Header/>
      </Page.Header>
      <Page.Content>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Main/>
              </ProtectedRoute>
            }
          />
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='forgot-password' element={<ForgotPassword/>}/>
          <Route path='reset-password' element={<ResetPassword/>}/>
          <Route path='feed' element={<Feed/>}/>
          <Route
            path='profile'
            element={
              <ProtectedRoute>
                <Profile/>
              </ProtectedRoute>
            }
          >
            <Route index element={<ProfilePageForm/>}/>
            <Route path='orders' element={<OrdersList/>}/>
          </Route>
          <Route
            path='profile/orders/:id'
            element={
              <ProtectedRoute>
                <Order/>
              </ProtectedRoute>
            }
          />
          <Route
            path='logout'
            element={
              <ProtectedRoute>
                <Logout/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Page.Content>
    </Page>
  )
}
