import { ReactNode } from 'react'
import styles from './FormError.module.css'

interface IFormErrorProps {
  children: ReactNode;
}

export const FormError = (props: IFormErrorProps): JSX.Element => {
  const { children } = props

  return (
    <p className={`${styles.root} text text_type_main-default`}>
      {children}
    </p>
  )
}
