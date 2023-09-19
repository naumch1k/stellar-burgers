import type { ReactNode } from 'react'
import { PageHeader } from './header'
import { PageContent } from './content'
import styles from './page.module.css'

interface PageProps {
  children: ReactNode;
}

export const Page = (props: PageProps): JSX.Element => {
  const { children } = props

  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}

Page.Header = PageHeader
Page.Content = PageContent
