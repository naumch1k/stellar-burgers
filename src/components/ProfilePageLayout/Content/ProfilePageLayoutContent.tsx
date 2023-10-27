import { ReactNode } from 'react'
import { useMatch } from 'react-router-dom'

interface IProfilePageLayoutContentProps {
  children: ReactNode;
}

export const ProfilePageLayoutContent = ({ children }: IProfilePageLayoutContentProps) => {
  const isIndex = useMatch('/profile')

  return (
    <div className={isIndex ? 'pt-30' : 'pt-10'}>
      {children}
    </div>
  )
}
