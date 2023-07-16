import { ReactNode } from 'react'
import styles from './page-content.module.css'

interface PageContentProps {
  children: ReactNode;
}

export const PageContent = (props: PageContentProps): JSX.Element => {
  const { children } = props

  return (
    <main className={styles.root}>
      {children}
    </main>
  )
}
