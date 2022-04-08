import styled, { css } from 'styled-components'
import { BsPeople } from 'react-icons/bs'
import { AiOutlineDollar } from 'react-icons/ai'
import { FiTrash } from 'react-icons/fi'

import { motion, AnimatePresence } from 'framer-motion'

export const Wrapper = styled.div.attrs({
  'data-testid': 'WrapperList'
})`
  width: 100%;

  top: 5;
`

export const Animate = styled(AnimatePresence)``
export const Motion = styled(motion.div).attrs({
  transition: { ease: 'easeInOut', duration: 0.5 },
  initial: { opacity: 0, scale: 0.6 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
  'data-testid': 'motion'
})`
  position: relative;

  width: 100%;
  margin: auto;
  margin-top: 10px;

  @media (max-width: 1200px) {
    width: 700px;
    margin-left: 170px;
  }

  @media (max-width: 800px) {
    width: 500px;
    margin-left: 20px;
  }

  @media (max-width: 600px) {
    width: 340px;
    margin-left: 60px;
  }
`

export const List = styled.div`
  ${({ theme }) => css`
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: ${theme.border.radius};
    display: flex;
    align-items: center;
  `}
`

export const DivList = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: 2rem;
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: left;
  `}
`


export const TitleList = styled.p`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 25px;
    color: ${theme.colors.black};
  `}
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;

  overflow: auto;
`

export const HeaderRight = styled.div`
  padding: 10px;
`

export const Filters = styled.div`
`

export const Date = styled.h2`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 33px;
    color: ${theme.colors.baseColorYellow};
  `}
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: 100px;

  overflow: auto;
`

export const CountParticipants = styled.h4`
  display: flex;
  flex-direction: row;
`

export const Value = styled.h4`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`

export const IconPeople = styled(BsPeople)`
  ${({ theme }) => css`
    font-size: 20px;
    margin-right: 5px;
    color: ${theme.colors.baseColorYellow};
  `}
`

export const IconDollar = styled(AiOutlineDollar)`
  ${({ theme }) => css`
    font-size: 18px;
    margin-right: 5px;
    color: ${theme.colors.baseColorYellow};
  `}
`
export const Table = styled.table`
  width: 100%;
`

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TableHeadTitle = styled.th``

export const TableHeadDescription = styled.th`
  margin-left: 50px;
`

export const TableHeadCategory = styled.th`
  margin-left: 100px;
`

export const TableHeadValue = styled.th`
  margin-left: 25px;
`

export const TableHeadDate = styled.th`
  margin-left: 25px;
`

export const TableHeadRemove = styled.th``

export const TableItem = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const TableTitle = styled.td`
  width: 50px;


  @media (max-width: 1200px) {
    width: 125px;
  }

  @media (max-width: 800px) {
    width: 125px;
  }

  @media (max-width: 600px) {
    width: 125px;
  }
`

export const TableCategory = styled.td`
  width: 80px;

  @media (max-width: 1200px) {
    width: 160px;
  }

  @media (max-width: 800px) {
    width: 160px;
  }

  @media (max-width: 600px) {
    width: 160px;
  }
`

export const TableValue = styled.td`
  width: 30px;

  @media (max-width: 1200px) {
    width: 80px;
  }

  @media (max-width: 800px) {
    width: 80px;
  }

  @media (max-width: 600px) {
    width: 80px;
  }
`

export const TableDate = styled.td`
  width: 50px;

  @media (max-width: 1200px) {
    width: 100px;
  }

  @media (max-width: 800px) {
    width: 100px;
  }

  @media (max-width: 600px) {
    width: 100px;
  }
`

export const TableDescription = styled.td`
  width: 200px;

  @media (max-width: 1200px) {
    width: 240px;
  }

  @media (max-width: 800px) {
    width: 240px;
  }

  @media (max-width: 800px) {
    width: 240px;
  }
`

export const TableIcon = styled.td`
  width: 40px;


  @media (max-width: 1200px) {
    width: 80px;
  }

  @media (max-width: 800px) {
    width: 80px;
  }

  @media (max-width: 800px) {
    width: 80px;
  }

  cursor: pointer;
`

export const IconRemove = styled(FiTrash)`
  ${({ theme }) => css`
    font-size: 25px;
    margin-right: 5px;
    color: ${theme.colors.baseColorRed};

    @media (max-width: 1200px) {
      width: 100px;
    }

    @media (max-width: 800px) {
      width: 100px;
    }

    @media (max-width: 800px) {
      width: 100px;
    }
  
  `}
`
