import styles from './PageContent.module.css'

import { ReactNode } from 'react'

interface PageContentProps {
  children: ReactNode,
}

export const PageContent = (props: PageContentProps): JSX.Element => {
  const { children } = props

  return (
    <main className={styles.root}>
      {children}
    </main>
  )
}
