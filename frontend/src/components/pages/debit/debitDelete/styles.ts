import Button from '@/components/Button'
import styled from 'styled-components'

export const Footer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
`


export const ButtonConfirm = styled(Button)`
  width: 50px;
`
export const ButtonCancel = styled(Button)`
  margin-left: 5px;
  width: 50px;
`