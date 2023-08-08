import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  Input,
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
import { registerRequest } from '../../store/auth/operations'

const Register = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { isFetching, isAuthenticated, error } = useSelector(selectAuthState)

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated, navigate])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(registerRequest({ name, email, password }))
  }

  return (
    <AuthPageLayout>
      <AuthPageTitle title='Create an account'/>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          value={name}
          placeholder='Name'
          onChange={e => setName(e.target.value)}
          required
        />
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
          {isFetching ? 'Signing up...' : 'Sign up'}
        </Button>
        <Form.Error>
          {error}
        </Form.Error>
      </Form>
      <AuthPageLayout.Links>
        <AuthLink
          leadInText='Already have an account?'
          linkText='Log in here!'
          to='/login'
        />
      </AuthPageLayout.Links>
    </AuthPageLayout>
  )
}

export default Register
