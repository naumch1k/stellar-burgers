import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { AuthPageLayout } from '../../components/AuthPageLayout'
import { AuthPageTitle } from '../../components/AuthPageTitle'
import { Form } from '../../components/Form'
import { AuthLink } from '../../components/AuthLink'
import { Button } from '../../components/ui/Button'
import { selectAuthState } from '../../store/auth/auth.selectors'
import useFormWithValidation from '../../hooks/useFormWithValidation'
import { useAppDispatch } from '../../store/store'
import { loginRequest } from '../../store/auth/auth.operations'
import { CustomValidationMessages } from '../../shared/constants/customValidationMessages'

const initialFormValues = {
  email: '',
  password: '',
}

const Login = () => {
  const dispatch = useAppDispatch()
    const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation(initialFormValues)

  const [isPasswordHidden, setIsPasswordHidden] = useState(true)

  const { isFetching, error } = useSelector(selectAuthState)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await dispatch(loginRequest({
        email: values.email,
        password: values.password,
      })).unwrap()
    } catch (error) {
      // TODO: Error Boundary
      console.log({ error })
    }
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
            type='submit'
            view='primary'
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
          href='/register'
        />
        <AuthLink
          leadInText='Forgot your password?'
          linkText='Reset your password'
          href='/forgot-password'
        />
      </AuthPageLayout.Links>
    </AuthPageLayout>
  )
}

export default Login
