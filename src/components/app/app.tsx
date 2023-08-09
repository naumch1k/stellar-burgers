import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from '../protected-route'
import { Page } from '../../components/page'
import { Header } from '../../components/header'
import Main from '../../pages/main/main'
import Login from '../../pages/login/login'
import Register from '../../pages/register/register'
import ForgotPassword from '../../pages/forgot-password/forgot-password'
import ResetPassword from '../../pages/reset-password/reset-password'
import Profile from '../../pages/profile'
import Logout from '../../pages/logout/logout'

export const App = () => {
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
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/reset-password' element={<ResetPassword/>}/>
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Profile/>
              </ProtectedRoute>
            }
          />
          <Route
            path='/logout'
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
