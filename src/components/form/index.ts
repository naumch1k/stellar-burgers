import { Form as Component } from './form'
import { FormError } from './error'

export const Form = Object.assign(Component, {
  Error: FormError
})
