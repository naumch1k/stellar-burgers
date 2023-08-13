import { useState } from 'react'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import AuthPageLayout from '../../components/auth-page-layout'
import { AuthPageTitle } from '../../components/auth-page-title'
import { Form } from '../../components/form'
import { AuthLink } from '../../components/auth-link'
import useFormWithValidation from '../../hooks/useFormWithValidation'
import { CustomValidationMessages } from '../../shared/constants/custom-validation-messages'

const initialFormValues = {
  password: '',
  code: '',
}

const ResetPassword = () => {
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation(initialFormValues)

  const [isPasswordHidden, setIsPasswordHidden] = useState(true)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <AuthPageLayout>
      <AuthPageTitle title='Create a new password'/>
      <Form onSubmit={handleSubmit}>
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
        <Input
          value={values.code}
          name='code'
          type='text'
          placeholder='Enter verification code'
          error={!!errors.code}
          errorText={CustomValidationMessages.CODE_ERROR}
          onChange={handleChange}
          required
        />
        <Button
          htmlType='submit'
          type='primary'
          size='medium'
          disabled={!isValid}
        >
          Save new password
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

export default ResetPassword
