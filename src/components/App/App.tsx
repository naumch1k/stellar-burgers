import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Loader } from '../Loader'
import { ProtectedRoute } from '../ProtectedRoute'
import { ProfilePageForm } from '../ProfilePageForm'
import { OrdersList } from '../OrderList'

const Layout = lazy(() => import('../Layout'))
const Main = lazy(() => import('../../pages/Main'))
const Login = lazy(() => import('../../pages/Login'))
const Register = lazy(() => import('../../pages/Register'))
const ForgotPassword = lazy(() => import('../../pages/ForgotPassword'))
const ResetPassword = lazy(() => import('../../pages/ResetPassword'))
const Feed = lazy(() => import('../../pages/Feed'))
const BurgerBuilder = lazy(() => import('../../pages/BurgerBuilder'))
const Profile = lazy(() => import('../../pages/Profile'))
const Order = lazy(() => import('../../pages/Order'))
const Logout = lazy(() => import('../../pages/Logout'))

export const App = () => (
  <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path='/' element={<Layout/>}>

        <Route index element={<Main/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='forgot-password' element={<ForgotPassword/>}/>
        <Route path='reset-password' element={<ResetPassword/>}/>
        <Route path='feed' element={<Feed/>}/>

        <Route path='' element={<ProtectedRoute/>}>
          <Route path='builder' element={<BurgerBuilder/>}/>
          <Route path='profile' element={<Profile/>}>
            <Route index element={<ProfilePageForm/>}/>
            <Route path='orders' element={<OrdersList/>}/>
            <Route path='orders/:id' element={<Order/>}/>
          </Route>
          <Route path='logout' element={<Logout/>}/>
        </Route>

      </Route>
      
      {/* TODO: route 404 */}
    </Routes>
  </Suspense>
)
