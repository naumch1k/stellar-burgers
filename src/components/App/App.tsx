import { lazy, useEffect, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { WindowHint } from 'components/WindowHint'
import { Loader } from 'components/Loader'
import { PublicRoute } from 'components/PublicRoute'
import { ProtectedRoute } from 'components/ProtectedRoute'
import { ProfilePageForm } from 'components/ProfilePageForm'
import { OrdersList } from 'components/OrderList'

import { useAppDispatch } from 'store/store'
import { ingredientsRequest } from 'store/ingredients/ingredients.operations'
import { checkUserAccessRequest } from 'store/auth/auth.operations'
import useWindowWidth from 'hooks/useWindowWidth'
import { breakpoints } from 'shared/breakpoints'

const Layout = lazy(() => import('components/Layout'))
const Main = lazy(() => import('pages/Main'))
const Login = lazy(() => import('pages/Login'))
const Register = lazy(() => import('pages/Register'))
const ForgotPassword = lazy(() => import('pages/ForgotPassword'))
const ResetPassword = lazy(() => import('pages/ResetPassword'))
const Feed = lazy(() => import('pages/Feed'))
const BurgerBuilder = lazy(() => import('pages/BurgerBuilder'))
const Profile = lazy(() => import('pages/Profile'))
const Order = lazy(() => import('pages/Order'))
const Logout = lazy(() => import('pages/Logout'))
const NotFound = lazy(() => import('pages/NotFound'))

export const App = () => {
  const dispatch = useAppDispatch()
  const windowWidth = useWindowWidth()

  useEffect(() => {
    dispatch(ingredientsRequest())
    dispatch(checkUserAccessRequest())
  }, [dispatch])

  if (windowWidth < breakpoints.desktop) return <WindowHint/>

  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route index element={<Main/>}/>
          <Route path='feed' element={<Feed/>}/>

          <Route path='' element={<PublicRoute/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='forgot-password' element={<ForgotPassword/>}/>
            <Route path='reset-password' element={<ResetPassword/>}/>
          </Route>

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
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Suspense>
  )
}
