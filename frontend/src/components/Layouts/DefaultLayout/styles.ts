import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Body = styled.div`
  width: 100%;
`

export const Header = styled.div`
  height: 100%;
  width: 6%;
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
  display: flex;
  flex-direction: column;
  position: fixed;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 800px) {
    width: 12%;
  }

  @media (max-width: 600px) {
    width: 12%;
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 150px;
`

export const Logo = styled.img`
  width: 60px;

  @media (max-width: 800px) {
    width: 50px;
  }

  @media (max-width: 600px) {
    width: 50px;
  }
`

export const Link = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
  border: none;
  background: none;
  cursor: pointer;
`
