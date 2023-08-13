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
import { registerRequest } from '../../store/auth/operations'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
}

const Register = () => {
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

    dispatch(registerRequest({
      name: values.name,
      email: values.email,
      password: values.password
    }))
  }

  return (
    <AuthPageLayout>
      <AuthPageTitle title='Create an account'/>
      <Form onSubmit={handleSubmit}>
        <Input
          value={values.name}
          name='name'
          type='text'
          placeholder='Name'
          error={!!errors.name}
          errorText={errors.name}
          onChange={handleChange}
          required
        />
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
