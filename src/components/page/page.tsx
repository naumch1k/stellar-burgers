import type { ReactNode } from 'react'
import { PageHeader } from './header'
import { PageContent } from './content'

interface PageProps {
  children: ReactNode;
}

export const Page = (props: PageProps): JSX.Element => {
  const { children } = props

  return (
    <div>
      {children}
    </div>
  )
}

Page.Header = PageHeader
Page.Content = PageContent
