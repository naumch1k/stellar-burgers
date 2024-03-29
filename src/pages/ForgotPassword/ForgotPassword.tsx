import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { AuthPageLayout } from 'components/AuthPageLayout'
import { AuthPageTitle } from 'components/AuthPageTitle'
import { Form } from 'components/Form'
import { Button } from 'components/ui/Button'
import { AuthLink } from 'components/AuthLink'
import { useAppDispatch } from 'store/store'
import { selectAuthState } from 'store/auth/auth.selectors'
import { verificationCodeRequest } from 'store/auth/auth.operations'
import useFormWithValidation from 'hooks/useFormWithValidation'
import { CustomValidationMessages } from 'shared/constants/customValidationMessages'

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
            type='submit'
            view='primary'
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
          href='/login'
        />
      </AuthPageLayout.Links>
    </AuthPageLayout>
  )
}

export default ForgotPassword
