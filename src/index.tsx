import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { App } from './components/App'
import store from './store/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='stellar-burgers'>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
