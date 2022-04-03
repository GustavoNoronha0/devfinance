import { VictoryPie } from 'victory';
import Card from '@/components/Card'
import React from 'react'
import * as S from './styles'
import Button from '@/components/Button';
import { useQuery } from '@apollo/client';
import graphQuery from '@/gql/reports/GraphQuery';
import reportsQuery from '@/gql/reports/ReportsQuery';
import { convertJsonToCsv } from './utils/convertToCsv';
import { createUriAndNameToFile, downloadFile } from './utils/download';

const Reports = () => {
  const pageLoaded = typeof window !== 'undefined';
  const account =  pageLoaded ? localStorage.getItem('account') : '';
  const { data: graph } = useQuery(graphQuery, {
    variables: { account },
  });
  const { data: reports } = useQuery(reportsQuery, {
    variables: { account },
  });
  const downloadReports = () => {
    const reportsHeader = [
      'amountDebit',
      'amountReceivement',
      'amountTotal',
    ];
    const fileCsv = convertJsonToCsv(reports.reportsAccount, reportsHeader)
    const createUriAndNameToFileProps = {
      file: fileCsv,
      fileName: 'Relatorios',
      fileType: 'csv',
    }
    const uriFile = createUriAndNameToFile(createUriAndNameToFileProps)
    downloadFile(uriFile.uri, 'Relatorios',)
  }
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
                  { x: "Pagar", y: graph?.graphAccount.countDebit ? graph.graphAccount.countDebit  : 0},
                  { x: "Receber", y: graph?.graphAccount.countReceivement ?  graph.graphAccount.countReceivement : 0}
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
          <Card count={reports?.reportsAccount?.amountDebit} title="Saldo a Pagar" onClick={() => console.log("debit")} />
          <Card count={reports?.reportsAccount?.amountReceivement} title="Saldo a Receber" onClick={() => console.log("receivement")} />
          <Card count={reports?.reportsAccount?.amountTotal} title="Saldo Total" onClick={() => console.log("total")} />
          <S.ButtonAdd>
            <Button
              typeStyle="download" 
              children={'Download'}
              onClick={() => {
                downloadReports()
              }}
            />
          </S.ButtonAdd> 
        </S.Cards>
      </S.Div>
    </S.Container>
  )
}

export default Reports
