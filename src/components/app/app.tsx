import { Routes, Route } from 'react-router-dom'
import { Page } from '../../components/page'
import { Header } from '../../components/header'
import Main from '../../pages/main/main'
import Login from '../../pages/login/login'

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
        </Routes>
      </Page.Content>
    </Page>
  )
}
