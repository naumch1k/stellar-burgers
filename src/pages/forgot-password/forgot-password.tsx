import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import AuthPageLayout from '../../components/auth-page-layout'
import { AuthPageTitle } from '../../components/auth-page-title'
import { Form } from '../../components/form'
import { AuthLink } from '../../components/auth-link'
import { selectAuthState } from '../../store/auth/selectors'
import useFormWithValidation from '../../hooks/useFormWithValidation'
import { CustomValidationMessages } from '../../shared/constants/custom-validation-messages'
import { useAppDispatch } from '../../store/store'
import { verificationCodeRequest } from '../../store/auth/operations'

const initialFormValues = {
  email: '',
}

const ForgotPassword = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation(initialFormValues)

  const { isFetching, error, isResettingPassword } = useSelector(selectAuthState)

  useEffect(() => {
    if (!isFetching && isResettingPassword) navigate('/reset-password')
  }, [isFetching, isResettingPassword, navigate])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(verificationCodeRequest({
      email: values.email,
    }))
  }

  return (
    <AuthPageLayout>
      <AuthPageTitle title='Forgot Your Password?'/>
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
        <Form.SubmitButton isFetching={isFetching}>
          <Button
            htmlType='submit'
            type='primary'
            size='medium'
            disabled={!isValid}
          >
            Email Verification Code
          </Button>
        </Form.SubmitButton>
        <Form.Error>
          {error}
        </Form.Error>
      </Form>
      <AuthPageLayout.Links>
        <AuthLink
          leadInText='Remembered the password?'
          linkText='Log in here'
          to='/login'
        />
      </AuthPageLayout.Links>
    </AuthPageLayout>
  )
}

export default ForgotPassword
