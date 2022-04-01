import * as S from './styles'
import { GrMoney } from 'react-icons/gr'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { MdAttachMoney, MdMoneyOffCsred } from 'react-icons/md'

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.Link href="/">
          <S.Logo src="/img/logo-finance.svg" />
        </S.Link>
        <S.Links>  
          <S.Link href='/category-receivement'>
            <RiMoneyDollarCircleLine size={30} />
          </S.Link>
          <S.Link href='/category-debit'>
            <GrMoney size={30} />
          </S.Link>
          <S.Link href='/receivement'>
            <MdAttachMoney size={30} />
          </S.Link>
          <S.Link href='/debit'>
            <MdMoneyOffCsred size={30} />
          </S.Link>
        </S.Links> 
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.Container>
  )
}

export default DefaultLayout
