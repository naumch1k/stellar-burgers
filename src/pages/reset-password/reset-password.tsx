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
import { CustomValidationMessages } from '../../shared/constants/custom-validation-messages'
import { useAppDispatch } from '../../store/store'
import { passwordResetRequest } from '../../store/auth/operations'

const initialFormValues = {
  password: '',
  token: '',
}

const ResetPassword = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation(initialFormValues)

  const { isFetching, error, isResettingPassword } = useSelector(selectAuthState)

  const [isPasswordHidden, setIsPasswordHidden] = useState(true)

  useEffect(() => {
    if (!isFetching && !isResettingPassword) navigate('/login')
  }, [isFetching, isResettingPassword, navigate])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(passwordResetRequest({
      password: values.password,
      token: values.token,
    }))
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
          value={values.token}
          name='token'
          type='text'
          placeholder='Enter verification code'
          error={!!errors.token}
          errorText={CustomValidationMessages.CODE_ERROR}
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
            Save new password
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

export default ResetPassword
