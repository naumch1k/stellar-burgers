import { Link } from 'components/ui/Link'

interface IAuthLinkProps {
  leadInText: string;
  linkText: string;
  href: string;
}

export const AuthLink = ({
  leadInText,
  linkText,
  href,
}: IAuthLinkProps) => (
  <p className={'text text_type_main-default text_color_inactive'}>{leadInText}
  {' '}<Link href={href}>{linkText}</Link>
  </p>
)
