import * as S from './styles'

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.Links>  
          <S.Link href="/">
            <S.Logo src="/img/logo-finance.svg" />
          </S.Link>
          <S.Link href='/category-receivement'>
            Cat/Receber
          </S.Link>
          <S.Link href='/category-debit'>
            Cat/Pagar
          </S.Link>
          <S.Link href='/receivement'>
            Contas/Receber
          </S.Link>
          <S.Link href='/debit'>
            Contas/Pagar
          </S.Link>
        </S.Links> 
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.Container>
  )
}

export default DefaultLayout
