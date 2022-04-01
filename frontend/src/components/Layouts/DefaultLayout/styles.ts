import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Body = styled.div`
  width: 100%;
`

export const Header = styled.div`
  height: 100%;
  width: 8%;
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
  display: flex;
  flex-direction: column;
  position: fixed;
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 150px;
`

export const Logo = styled.img`
  width: 40px;
`

export const Link = styled.a`
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
`
