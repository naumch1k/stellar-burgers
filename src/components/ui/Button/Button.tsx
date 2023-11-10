import type { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  view?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const Button = (props: IButtonProps) => {
  const {
    children,
    type = 'button',
    view = 'primary',
    size = 'medium',
    onClick,
    ...rest
  } = props

  const classes = `${styles.root} ${styles[view]} ${styles[size]}`

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}
