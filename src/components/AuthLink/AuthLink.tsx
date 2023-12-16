import { Link } from 'components/ui/Link'

interface IAuthLinkProps {
  leadInText: string;
  linkText: string;
  href: string;
}

export const AuthLink = (props: IAuthLinkProps) => {
  const { leadInText, linkText, href } = props

  return (
    <p className={'text text_type_main-default text_color_inactive'}>{leadInText}
    {' '}<Link href={href}>{linkText}</Link>
  </p>
  )
}
