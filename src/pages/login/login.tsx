import { useState } from 'react'
import {
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import AuthPageLayout from '../../components/auth-page-layout'
import { AuthPageTitle } from '../../components/auth-page-title'
import { Form } from '../../components/form'
import { AuthLink } from '../../components/auth-link'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
        >
          Log in
        </Button>
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
