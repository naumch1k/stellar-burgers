import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { AuthPageLayout } from '../../components/AuthPageLayout'
import { AuthPageTitle } from '../../components/AuthPageTitle'
import { Form } from '../../components/Form'
import { AuthLink } from '../../components/AuthLink'
import { selectAuthState } from '../../store/auth/selectors'
import useFormWithValidation from '../../hooks/useFormWithValidation'
import { useAppDispatch } from '../../store/store'
import { loginRequest } from '../../store/auth/operations'
import { CustomValidationMessages } from '../../shared/constants/custom-validation-messages'

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
          errorText={CustomValidationMessages.EMAIL_ERROR}
          onChange={handleChange}
          required
        />
        <Input
          value={values.password}
          name='password'
          type={isPasswordHidden ? 'password' : 'text'}
          placeholder='Password'
          error={!!errors.password}
          errorText={CustomValidationMessages.PASSWORD_ERROR}
          icon={isPasswordHidden ? 'ShowIcon' : 'HideIcon'}
          onIconClick={() => setIsPasswordHidden(!isPasswordHidden)}
          onChange={handleChange}
          minLength={8}
          required
        />
        <Form.SubmitButton isFetching={isFetching}>
          <Button
            htmlType='submit'
            type='primary'
            size='medium'
            disabled={isFetching || !isValid}
          >
            Log in
          </Button>
        </Form.SubmitButton>
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
