import * as S from './styles'

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.Link href="/">
          Dashboard
        </S.Link>
        <S.Link>
          Cat/Receber
        </S.Link>
        <S.Link>
          Cat/Pagar
        </S.Link>
        <S.Link>
          Contas/Receber
        </S.Link>
        <S.Link>
          Contas/Pagar
        </S.Link>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.Container>
  )
}

export default DefaultLayout
