import { Routes, Route } from 'react-router-dom'
import { Page } from '../../components/page'
import { Header } from '../../components/header'
import Main from '../../pages/main/main'
import Login from '../../pages/login/login'
import Register from '../../pages/register/register'
import ForgotPassword from '../../pages/forgot-password/forgot-password'

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
        </Routes>
      </Page.Content>
    </Page>
  )
}
