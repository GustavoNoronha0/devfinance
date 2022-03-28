import * as S from './styles'

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.TitleHeader>Controle Financeiro</S.TitleHeader>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.Container>
  )
}

export default DefaultLayout
