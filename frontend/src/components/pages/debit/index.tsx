import Button from '@/components/Button'
import ListDefault from '@/components/ListDefault'
import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import DebitAdd from './debitAdd'
import { Default } from '@/gql/models/default'
import { useQuery } from '@apollo/client'
import listDebitsQuery from '@/gql/debit/ListDebitsQuery'

const Debit = () => {
  const [isModalDebitAddOpen, setIsModalDebitAddOpen] = useState(false)
  const [debits, setDebits] = useState<Default[]>([])

  const getValueOpen = (value: boolean) => {
    setIsModalDebitAddOpen(value)
  }
  const pageLoaded = typeof window !== 'undefined';
  const account = pageLoaded ? localStorage.getItem('account') : '';
  const { data: debitsList, loading: loadingDebits } = useQuery(listDebitsQuery, {
    variables: { input: { filters: { account }, paginate: { page: 1, limit: 10 } } },
  });
  const loadDebits = () => {
    if(debitsList?.debits) {
      setDebits(debitsList.debits.items)
    }
  }
  const onRemove = () => {
    console.log('onRemove')
  }
  const handleToggleModalDebitAdd = useCallback(() => {
    setIsModalDebitAddOpen(!isModalDebitAddOpen)
  }, [isModalDebitAddOpen])

  useEffect(() => {
    getValueOpen(isModalDebitAddOpen)
    loadDebits()
  }, [isModalDebitAddOpen, debitsList?.debits])
  return (
    <S.Container>
      <S.Div>
        <DebitAdd
          isOpen={isModalDebitAddOpen}
          onClose={handleToggleModalDebitAdd}
          getValueOpen={getValueOpen}
          loadDebits={loadDebits}
        />
        <S.ButtonAdd>
          <Button 
            typeStyle="add" 
            children="Adicionar" 
            onClick={() => {
              setIsModalDebitAddOpen(true)
            }}
          /> 
        </S.ButtonAdd>
        {!loadingDebits &&
          <ListDefault title="Lista de Debitos" defaults={debits} onRemove={onRemove} />
        }
      </S.Div>
    </S.Container>
  )
}

export default Debit
