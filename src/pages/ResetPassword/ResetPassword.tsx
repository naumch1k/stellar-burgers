import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { AuthPageLayout } from '../../components/AuthPageLayout'
import { AuthPageTitle } from '../../components/AuthPageTitle'
import { Form } from '../../components/Form'
import { Button } from '../../components/ui/Button'
import { AuthLink } from '../../components/AuthLink'
import { useAppDispatch } from '../../store/store'
import { selectAuthState } from '../../store/auth/auth.selectors'
import { passwordResetRequest } from '../../store/auth/auth.operations'
import useFormWithValidation from '../../hooks/useFormWithValidation'
import { CustomValidationMessages } from '../../shared/constants/custom-validation-messages'

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
            type='submit'
            view='primary'
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
          href='/login'
        />
      </AuthPageLayout.Links>
    </AuthPageLayout>
  )
}

export default ResetPassword
