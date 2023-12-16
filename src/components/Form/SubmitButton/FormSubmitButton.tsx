import { ReactNode } from 'react'
import { Loader } from 'components/Loader'
import styles from './FormSubmitButton.module.css'

interface IFormSubmitButtonProps {
  isFetching: boolean;
  children: ReactNode;
}

export const FormSubmitButton = ({
  isFetching,
  children,
}: IFormSubmitButtonProps): JSX.Element => (
  <div className={styles.root}>
    {children}
    {isFetching && <Loader/>}
  </div>
)
