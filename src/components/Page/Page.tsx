import { PageHeader } from "./Header"
import { PageContent } from "./Content"

import type { ReactNode } from 'react'

interface PageProps {
  children: ReactNode,
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
