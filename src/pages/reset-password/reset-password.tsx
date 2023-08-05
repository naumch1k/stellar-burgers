import { useState } from 'react'
import {
  PasswordInput,
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import AuthPageLayout from '../../components/auth-page-layout'
import { AuthPageTitle } from '../../components/auth-page-title'
import { Form } from '../../components/form'
import { AuthLink } from '../../components/auth-link'

const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')

  return (
    <AuthPageLayout>
      <AuthPageTitle title='Create a new passsword'/>
      <Form>
        <PasswordInput
          value={password}
          placeholder='Enter new password'
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Input
          type='text'
          value={code}
          placeholder='Enter verification code'
          onChange={e => setCode(e.target.value)}
          required
        />
        <Button
          htmlType='submit'
          type='primary'
          size='medium'
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
