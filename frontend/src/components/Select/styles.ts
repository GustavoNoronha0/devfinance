import styled, { css, DefaultTheme } from 'styled-components'
import { SelectProps } from '.'

const inputModifiers = {
  errorSelect: (theme: DefaultTheme) => css`
    border: 0.0625rem solid ${theme.colors.baseColorRed};
  `
}

export const Wrapper = styled.main.attrs({
  id: 'WrapperSelect'
})``

export const Label = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-style: normal;
    font-weight: ${theme.font.semiBold};
    font-size: 16px;
    line-height: 25px;

    display: flex;
    align-items: center;

    color: ${theme.colors.black};
  `}
`

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  position: relative;
  justify-content: center;
  align-items: center;
`

export const Select = styled.select<SelectProps>`
  ${({ theme, error }) => css`
    background: transparent;
    border: 1px solid ${theme.colors.lightGray};
    color: ${theme.colors.black};
    box-sizing: border-box;
    border-radius: 7px;
    font-family: ${theme.font.family};
    font-style: normal;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.black};
    font-size: 14px;
    line-height: 16px;
    font-style: italic;

    display: flex;
    align-items: center;
    height: 55px;
    width: 282px;

    margin: 5px 0;

    ${!!error && inputModifiers.errorSelect(theme)}
  `}
`

export const Option = styled.option`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-style: normal;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    font-size: 14px;
    line-height: 16px;
    font-style: italic;

    display: flex;
    align-items: center;
  `}
`

export const Error = styled.h4`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-style: normal;
    font-weight: ${theme.font.normal};
    font-size: 14px;
    line-height: 16px;

    display: flex;
    align-items: center;

    color: ${theme.colors.baseColorRed};
  `}
`
