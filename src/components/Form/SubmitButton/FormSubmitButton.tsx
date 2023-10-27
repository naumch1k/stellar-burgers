import { ReactNode } from 'react'
import { Loader } from '../../Loader';
import styles from './FormSubmitButton.module.css'

interface IFormSubmitButtonProps {
  isFetching: boolean;
  children: ReactNode;
}

export const FormSubmitButton = (props: IFormSubmitButtonProps): JSX.Element => {
  const { children, isFetching } = props

  return (
    <div className={styles.root}>
      {children}
      {isFetching && <Loader/>}
    </div>
  )
}
