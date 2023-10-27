import { Link } from 'react-router-dom'
import styles from './AuthLink.module.css'

interface IAuthLinkProps {
  leadInText: string;
  linkText: string;
  to: string;
}

export const AuthLink = (props: IAuthLinkProps) => {
  const { leadInText, linkText, to } = props

  return (
    <p className={'text text_type_main-default text_color_inactive'}>{leadInText}
    {' '}<Link className={styles.link} to={to}>{linkText}</Link>
  </p>
  )
}
