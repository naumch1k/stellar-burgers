import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import AuthPageLayout from '../../components/auth-page-layout'
import { AuthPageTitle } from '../../components/auth-page-title'
import { Form } from '../../components/form'
import { AuthLink } from '../../components/auth-link'
import { selectAuthState } from '../../store/auth/selectors'
import { useAppDispatch } from '../../store/store'
import { loginRequest } from '../../store/auth/operations'

const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { isFetching, isAuthenticated, error } = useSelector(selectAuthState)

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated, navigate])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(loginRequest({ email, password }))
  }

  return (
    <AuthPageLayout>
      <AuthPageTitle title='Log in'/>
      <Form onSubmit={handleSubmit}>
        <EmailInput
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <PasswordInput
          value={password}
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button
          htmlType='submit'
          type='primary'
          size='medium'
          disabled={isFetching}
        >
          {isFetching ? 'Logging in...' : 'Log in'}
        </Button>
        <Form.Error>
          {error}
        </Form.Error>
      </Form>
      <AuthPageLayout.Links>
        <AuthLink
          leadInText='Not a member yet?'
          linkText='Sign up here!'
          to='/register'
        />
        <AuthLink
          leadInText='Forgot your password?'
          linkText='Reset your password'
          to='/forgot-password'
        />
      </AuthPageLayout.Links>
    </AuthPageLayout>
  )
}

export default Login
