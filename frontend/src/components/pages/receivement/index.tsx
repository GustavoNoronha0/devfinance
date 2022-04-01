import Button from '@/components/Button'
import ListDefault from '@/components/ListDefault'
import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import ReceivementAdd from './receivementAdd'
import { Default } from '@/gql/models/default'

const Receivement = () => {
  const [isModalReceivementAddOpen, setIsModalReceivementAddOpen] = useState(false)
  const [categoriesReceivement, setCategoriesReceivement] = useState<Default[]>([])

  const getValueOpen = (value: boolean) => {
    setIsModalReceivementAddOpen(value)
  }
  const loadReceivements = () => {
    setCategoriesReceivement([
      {
        id: 'any_id',
        title: 'any_title',
        description: 'any_description',
        category: 'receivement',
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
  const handleToggleModalReceivementAdd = useCallback(() => {
    setIsModalReceivementAddOpen(!isModalReceivementAddOpen)
  }, [isModalReceivementAddOpen])

  useEffect(() => {
    getValueOpen(isModalReceivementAddOpen)
    loadReceivements()
  }, [isModalReceivementAddOpen])
  return (
    <S.Container>
      <S.Div>
        <ReceivementAdd
          isOpen={isModalReceivementAddOpen}
          onClose={handleToggleModalReceivementAdd}
          getValueOpen={getValueOpen}
          loadReceivements={loadReceivements}
        />
        <S.ButtonAdd>
          <Button 
            typeStyle="add" 
            children="Adicionar" 
            onClick={() => {
              setIsModalReceivementAddOpen(true)
            }}
          /> 
        </S.ButtonAdd>
        <ListDefault title="Lista de Recebimentos" defaults={categoriesReceivement} onRemove={onRemove} />
      </S.Div>
    </S.Container>
  )
}

export default Receivement
