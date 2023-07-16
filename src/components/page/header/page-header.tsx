import { ReactNode } from 'react'
import styles from './page-header.module.css'

interface PageHeaderProps {
  children: ReactNode;
}

export const PageHeader = (props: PageHeaderProps): JSX.Element => {
  const { children } = props

  return (
    <header className={styles.root}>
      {children}
    </header>
  )
}
