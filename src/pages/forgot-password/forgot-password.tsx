import { useState } from 'react'
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import AuthPageLayout from '../../components/auth-page-layout'
import { AuthPageTitle } from '../../components/auth-page-title'
import { Form } from '../../components/form'
import { AuthLink } from '../../components/auth-link'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <AuthPageLayout>
      <AuthPageTitle title='Forgot Your Password?'/>
      <Form onSubmit={handleSubmit}>
        <EmailInput
          value={email}
          placeholder='Enter your email'
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Button
          htmlType='submit'
          type='primary'
          size='medium'
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
