interface IAuthPageTitleProps {
  title: string;
}

export const AuthPageTitle = ({ title }: IAuthPageTitleProps) => (
  <h2 className='text text_type_main-medium mb-6'>{title}</h2>
)
