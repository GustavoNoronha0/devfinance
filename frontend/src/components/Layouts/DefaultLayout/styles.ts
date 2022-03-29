import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Body = styled.div`
  width: 100%;
`

export const Header = styled.div`
  height: fit-content;
  width: 100%;
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const Links = styled.div`
  width: 75%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const Logo = styled.img``

export const Link = styled.a`
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
`
