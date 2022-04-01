import Button from '@/components/Button'
import ListDefault from '@/components/ListDefault'
import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import DebitAdd from './debitAdd'
import { Default } from '@/gql/models/default'

const Debit = () => {
  const [isModalDebitAddOpen, setIsModalDebitAddOpen] = useState(false)
  const [categoriesDebit, setCategoriesDebit] = useState<Default[]>([])

  const getValueOpen = (value: boolean) => {
    setIsModalDebitAddOpen(value)
  }
  const loadDebits = () => {
    setCategoriesDebit([
      {
        id: 'any_id',
        title: 'any_title',
        description: 'any_description',
        category: 'debit',
        value: '10.00',
        date: new Date()
      },
      {
        id: 'any_id2',
        title: 'any_title',
        category: 'receivement',
        description: 'any_description',
        value: '10.00',
        date: new Date()
      }
    ])
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
  }, [isModalDebitAddOpen])
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
        <ListDefault title="Lista de Debitos" defaults={categoriesDebit} onRemove={onRemove} />
      </S.Div>
    </S.Container>
  )
}

export default Debit
