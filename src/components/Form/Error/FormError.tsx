import { ReactNode } from 'react'
import styles from './FormError.module.css'

interface IFormErrorProps {
  children: ReactNode;
}

export const FormError = ({ children }: IFormErrorProps): JSX.Element => (
  <p className={`${styles.root} text text_type_main-default`}>
    {children}
  </p>
)
