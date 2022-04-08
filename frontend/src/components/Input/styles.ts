import styled, { css, DefaultTheme } from 'styled-components'
import { InputProps } from '.'

const inputModifiers = {
  errorInput: (theme: DefaultTheme) => css`
    border: 0.0625rem solid ${theme.colors.baseColorRed};
  `,
  inputFilter: () => css`
    padding: 15px 10px; 
    max-height: 50px;
    width: 170px;

    ::placeholder {
      font-size: 10px;
    }

    :-ms-input-placeholder {
      font-size: 10px;
    }

    ::-ms-input-placeholder {
      font-size: 10px;
    }

    @media (max-width: 1200px) {
      width: 130px;
    }

    @media (max-width: 800px) {
      width: 100px;
    }

    @media (max-width: 600px) {
      width: 100px;
    }
  `
}

export const Wrapper = styled.main.attrs({
  id: 'WrapperInput'
})<InputProps>`
  ${({ isFilter }) => css`
    ${!!isFilter && 'margin-right: 10px'}
  `}
`

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

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  position: relative;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input<InputProps>`
  ${({ theme, error, isFilter }) => css`
    padding: 20px 16px;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.lightGray};
    box-sizing: border-box;
    border-radius: 7px;
    height: fit-content;
    width: 282px;

    margin: 5px 0;

    ${!!error && inputModifiers.errorInput(theme)}
    ${!!isFilter && inputModifiers.inputFilter()}

    ::placeholder {
      font-family: ${theme.font.family};
      font-style: italic;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;

      color: ${theme.colors.black};
    }

    :-ms-input-placeholder {
      font-family: ${theme.font.family};
      font-style: italic;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;

      color: ${theme.colors.black};
    }

    ::-ms-input-placeholder {
      font-family: ${theme.font.family};
      font-style: italic;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;

      color: ${theme.colors.black};
    }
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
