import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import AuthPageLayout from '../../components/auth-page-layout'
import { AuthPageTitle } from '../../components/auth-page-title'
import { Form } from '../../components/form'
import { AuthLink } from '../../components/auth-link'
import useFormWithValidation from '../../hooks/useFormWithValidation'
import { CustomValidationMessages } from '../../shared/constants/custom-validation-messages'

const initialFormValues = {
  email: '',
}

const ForgotPassword = () => {
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation(initialFormValues)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
        <Button
          htmlType='submit'
          type='primary'
          size='medium'
          disabled={!isValid}
        >
          Email Recovery Link
        </Button>
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
