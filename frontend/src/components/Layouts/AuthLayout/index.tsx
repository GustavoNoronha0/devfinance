import * as S from './styles'

type AuthLayoutProps = {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <S.TitleLogin>Login</S.TitleLogin>
      {children}
    </>
  )
}

export default AuthLayout
