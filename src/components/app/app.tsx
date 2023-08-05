import { Routes, Route } from 'react-router-dom'
import { Page } from '../../components/page'
import { Header } from '../../components/header'
import Main from '../../pages/main/main'
import Login from '../../pages/login/login'
import Register from '../../pages/register/register'
import ForgotPassword from '../../pages/forgot-password/forgot-password'
import ResetPassword from '../../pages/reset-password/reset-password'
import Profile from '../../pages/profile'

export const App = () => {
  return (
    <Page>
      <Page.Header>
        <Header/>
      </Page.Header>
      <Page.Content>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/reset-password' element={<ResetPassword/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Page.Content>
    </Page>
  )
}
