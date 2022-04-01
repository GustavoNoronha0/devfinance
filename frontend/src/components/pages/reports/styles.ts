import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

export const Div = styled.div`
  width: 80%;
`

export const Graph = styled.div`
  margin: 10px 60px; 
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 320px));
  grid-row-gap: 10px;

  align-items: center;
  justify-content: space-arround;
`

export const Reports = styled.div`
  margin-left: 50px;
`

export const ReportsTitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
  display: flex;
  flex-direction: row;
`

export const ReportsValue = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.baseColorYellow};
    margin-left: 5px;
  `}
`

export const ReportsValueDebit = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.tomato};
    margin-left: 5px;
  `}
`

export const ReportsValueReceivement = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.baseColorGreen};
    margin-left: 5px;
  `}
`

export const ButtonAdd = styled.div`
  margin-left: 20px;


  @media (max-width: 800px) {
    margin-left: 40px;
  }

  @media (max-width: 600px) {
    margin-left: 40px;
  }
`

export const Cards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 320px));
  grid-row-gap: 10px;

  align-items: center;
  justify-content: center;
  margin-top: 40px;
`

