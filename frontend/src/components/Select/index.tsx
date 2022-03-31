/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, SelectHTMLAttributes } from 'react'

import * as S from './styles'
export * from './mock'

export type SelectProps = {
  onInputChange?: (value: any) => void
  label?: string
  options?: string[]
  disabled?: boolean
  error?: string
  required?: boolean
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = ({
  label,
  options,
  name,
  error,
  disabled,
  onInputChange,
  required
}: SelectProps) => {
  const [value, setValue] = useState<any>()

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.SelectWrapper>
        <S.Select
          onChange={onChange}
          disabled={disabled}
          name={name}
          label={label}
          error={error}
          required={required}
        >
          {options && options.map((option) => (
            <S.Option value={option}>
              {option}
            </S.Option>
          ))}
        </S.Select>
      </S.SelectWrapper>
      <S.Error>{error}</S.Error>
    </S.Wrapper>
  )
}

export default Select
