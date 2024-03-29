import type { AnchorHTMLAttributes } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styles from './Link.module.css'

interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  href: string,
  isOutsideLink?: boolean;
  view?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export const Link = (props: ILinkProps) => {
  const {
    children,
    className,
    href,
    isOutsideLink = false,
    view = 'primary',
    size,
  } = props

  const classes = `${className} ${styles.root} ${styles[view]} ${size ? styles[size] : ''}`

  return (
    !isOutsideLink ? (
      <RouterLink
        className={classes}
        to={href}
      >
        {children}
      </RouterLink>
    ) : (
      <a
        className={classes}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    )
  )
}
