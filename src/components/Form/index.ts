import { Form as Component } from './Form'
import { FormError } from './Error'
import { FormSubmitButton } from './SubmitButton'

export const Form = Object.assign(Component, {
  Error: FormError,
  SubmitButton: FormSubmitButton,
})
