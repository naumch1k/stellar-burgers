import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from '../ProtectedRoute'
import Main from '../../pages/Main'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import ForgotPassword from '../../pages/ForgotPassword'
import ResetPassword from '../../pages/ResetPassword'
import Feed from '../../pages/Feed'
import Profile from '../../pages/Profile'
import Order from '../../pages/Order'
import { Page } from '../page'
import { Header } from '../Header'
import { ProfilePageForm } from '../ProfilePageForm'
import { OrdersList } from '../OrderList'
import Logout from '../../pages/Logout'
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
