import { Form as Component } from './form'
import { FormError } from './error'
import { FormSubmitButton } from './submit-button'

export const Form = Object.assign(Component, {
  Error: FormError,
  SubmitButton: FormSubmitButton,
})
