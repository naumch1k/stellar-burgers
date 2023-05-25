import styles from './PageHeader.module.css'

import { ReactNode } from 'react'

interface PageHeaderProps {
  children: ReactNode,
}

export const PageHeader = (props: PageHeaderProps): JSX.Element => {
  const { children } = props
  
  return (
    <header className={styles.root}>
      {children}
    </header>
  )
}
