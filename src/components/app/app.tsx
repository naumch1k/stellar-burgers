import { Routes, Route } from 'react-router-dom'
import { Page } from '../../components/page'
import { Header } from '../../components/header'
import Main from '../../pages/main/main'

export const App = () => {
  return (
    <Page>
      <Page.Header>
        <Header/>
      </Page.Header>
      <Page.Content>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </Page.Content>
    </Page>
  )
}
