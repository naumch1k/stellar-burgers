import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { AuthPageLayout } from '../../components/AuthPageLayout'
import { AuthPageTitle } from '../../components/AuthPageTitle'
import { Form } from '../../components/Form'
import { Button } from '../../components/ui/Button'
import { AuthLink } from '../../components/AuthLink'
import { selectAuthState } from '../../store/auth/selectors'
import useFormWithValidation from '../../hooks/useFormWithValidation'
import { CustomValidationMessages } from '../../shared/constants/custom-validation-messages'
import { useAppDispatch } from '../../store/store'
import { registerRequest } from '../../store/auth/operations'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
}

const Register = () => {
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
      await dispatch(registerRequest({
        name: values.name,
        email: values.email,
        password: values.password
      })).unwrap()
    } catch (error) {
      // TODO: Error Boundary
      console.log({ error })
    }
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
          errorText={CustomValidationMessages.NAME_ERROR}
          onChange={handleChange}
          required
        />
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
            Sign up
          </Button>
        </Form.SubmitButton>
        <Form.Error>
          {error}
        </Form.Error>
      </Form>
      <AuthPageLayout.Links>
        <AuthLink
          leadInText='Already have an account?'
          linkText='Log in here!'
          href='/login'
        />
      </AuthPageLayout.Links>
    </AuthPageLayout>
  )
}

export default Register
