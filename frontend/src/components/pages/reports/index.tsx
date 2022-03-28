import Card from '@/components/Card'
import React from 'react'
import * as S from './styles'

const Reports = () => {
  return (
    <S.Container>
      <Card count="1200.00" title="Quantidade a Pagar" onClick={() => console.log("debit")} />
      <Card count="2300.00" title="Quantidade a Receber" onClick={() => console.log("receivement")} />
      <Card count="1100.00" title="Quantidade Total" onClick={() => console.log("total")} />
    </S.Container>
  )
}

export default Reports
