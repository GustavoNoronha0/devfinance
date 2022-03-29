import { VictoryChart, VictoryPie } from 'victory';
import Card from '@/components/Card'
import React from 'react'
import * as S from './styles'

const Reports = () => {
  return (
    <S.Container>
      <S.Cards>
        <Card count="1200.00" title="Quantidade a Pagar" onClick={() => console.log("debit")} />
        <Card count="2300.00" title="Quantidade a Receber" onClick={() => console.log("receivement")} />
        <Card count="1100.00" title="Quantidade Total" onClick={() => console.log("total")} />
      </S.Cards>
      <S.Graph>
         <VictoryPie
            padAngle={4}
            animate={{
              duration: 2000
            }}
            innerRadius={100}
            colorScale={["tomato", "orange"]}
            data={[
                { x: "Pagar", y: 1200 },
                { x: "Receber", y: 2300 },
              ]}
            style={{
              data: {
                fillOpacity: 0.9, stroke: "#fff", strokeWidth: 3
              },
              labels: {
                fill: "#fff"
              }
            }}
          />
      </S.Graph>
    </S.Container>
  )
}

export default Reports
