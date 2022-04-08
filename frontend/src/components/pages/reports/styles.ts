import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`

export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 200px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 200px;
  }
`

export const Graph = styled.div`
  margin: 2px 60px; 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 320px));
  grid-row-gap: 10px;

  align-items: center;

  @media (max-width: 800px) {
    margin-left: 80px;
  }

  @media (max-width: 600px) {
    margin-left: 80px;  
  }
`

export const Reports = styled.div`
  margin-left: 50px;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
`

export const ReportsValue = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.baseColorYellow};
    margin-left: 5px;
  `}
`

export const ReportsTitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
  display: flex;
  flex-direction: row;
`

export const ReportsValueDebit = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.tomato};
    margin-right: 5px;
  `}
`

export const ReportsValueReceivement = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.baseColorYellow};
    margin-right: 5px;
  `}
`

export const ButtonAdd = styled.div`
  margin-left: 30px;
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
`

