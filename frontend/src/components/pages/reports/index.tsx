import { VictoryPie } from 'victory';
import Card from '@/components/Card'
import React from 'react'
import * as S from './styles'
import Button from '@/components/Button';
import { BsDownload } from 'react-icons/bs';

const Reports = () => {
  return (
    <S.Container>
      <S.Div>         
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
                  fill: "transparent"
                }
              }}
          /> 
          <S.Reports>
            <S.ReportsTitle>
            <S.ReportsValueDebit> * </S.ReportsValueDebit>  Quantidade a Pagar 
            </S.ReportsTitle>
            <S.ReportsTitle>
            <S.ReportsValueReceivement> * </S.ReportsValueReceivement> Quantidade a Receber
            </S.ReportsTitle>
          </S.Reports>
        </S.Graph>
        <S.Cards>
          <Card count="1200.00" title="Saldo a Pagar" onClick={() => console.log("debit")} />
          <Card count="2300.00" title="Saldo a Receber" onClick={() => console.log("receivement")} />
          <Card count="1100.00" title="Saldo Total" onClick={() => console.log("total")} />
          <S.ButtonAdd>
            <Button
              typeStyle="download" 
              children={'Download'}
              onClick={() => {
                console.log('reports')
              }}
            />
          </S.ButtonAdd> 
        </S.Cards>
      </S.Div>
    </S.Container>
  )
}

export default Reports
