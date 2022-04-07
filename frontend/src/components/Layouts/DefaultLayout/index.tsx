import * as S from './styles'
import { GrMoney } from 'react-icons/gr'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { MdAttachMoney, MdMoneyOffCsred } from 'react-icons/md'
import { useRouter } from 'next/dist/client/router'

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const router = useRouter()
  return (
    <S.Container>
      <S.Header>
        <S.Link onClick={() => router.replace('/')}>
          <S.Logo src="/img/logo-finance.svg" />
        </S.Link>
        <S.Links>  
          <S.Link onClick={() => router.replace('/category-receivement')} >
            <RiMoneyDollarCircleLine size={30} />
          </S.Link>
          <S.Link onClick={() => router.replace('/category-debit')} >
            <GrMoney size={30} />
          </S.Link>
          <S.Link onClick={() => router.replace('/receivement')} >
            <MdAttachMoney size={30} />
          </S.Link>
          <S.Link onClick={() => router.replace('/debit')} >
            <MdMoneyOffCsred size={30} />
          </S.Link>
        </S.Links> 
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.Container>
  )
}

export default DefaultLayout
