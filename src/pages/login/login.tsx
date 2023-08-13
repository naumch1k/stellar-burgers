import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import AuthPageLayout from '../../components/auth-page-layout'
import { AuthPageTitle } from '../../components/auth-page-title'
import { Form } from '../../components/form'
import { AuthLink } from '../../components/auth-link'
import { selectAuthState } from '../../store/auth/selectors'
import useFormWithValidation from '../../hooks/useFormWithValidation'
import { useAppDispatch } from '../../store/store'
import { loginRequest } from '../../store/auth/operations'

const initialFormValues = {
  email: '',
  password: '',
}

const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
    const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation(initialFormValues)

  const [isPasswordHidden, setIsPasswordHidden] = useState(true)

  const { isFetching, isAuthenticated, error } = useSelector(selectAuthState)

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated, navigate])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(loginRequest({
      email: values.email,
      password: values.password,
    }))
  }

  return (
    <AuthPageLayout>
      <AuthPageTitle title='Log in'/>
      <Form onSubmit={handleSubmit}>
        <Input
          value={values.email}
          name='email'
          type='email'
          placeholder='E-mail'
          error={!!errors.email}
          errorText={errors.email}
          onChange={handleChange}
          required
        />
        <Input
          value={values.password}
          name='password'
          type={isPasswordHidden ? 'password' : 'text'}
          placeholder='Password'
          error={!!errors.password}
          errorText={errors.password}
          icon={isPasswordHidden ? 'ShowIcon' : 'HideIcon'}
          onIconClick={() => setIsPasswordHidden(!isPasswordHidden)}
          onChange={handleChange}
          required
        />
        <Button
          htmlType='submit'
          type='primary'
          size='medium'
          disabled={isFetching || !isValid}
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
