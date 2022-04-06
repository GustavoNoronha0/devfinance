import Button from '@/components/Button'
import ListDefault from '@/components/ListDefault'
import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import ReceivementAdd from './receivementAdd'
import { Default } from '@/gql/models/default'
import { useQuery } from '@apollo/client'
import listReceivementsQuery from '@/gql/receivement/ListReceivementsQuery'

const Receivement = () => {
  const [isModalReceivementAddOpen, setIsModalReceivementAddOpen] = useState(false)
  const [receivements, setReceivements] = useState<Default[]>([])

  const getValueOpen = (value: boolean) => {
    setIsModalReceivementAddOpen(value)
  }
  const pageLoaded = typeof window !== 'undefined';
  const account = pageLoaded ? localStorage.getItem('account') : '';
  const { data: reiceivementsList, loading: loadingReceivements } = useQuery(listReceivementsQuery, {
    variables: { input: { filters: { account }, paginate: { page: 1, limit: 10 } } },
  });
  const loadReceivements = () => {
    if(reiceivementsList?.receivements) {
      setReceivements(reiceivementsList.receivements.items)
    }
  }
  const onRemove = () => {
    console.log('onRemove')
  }
  const handleToggleModalDebitAdd = useCallback(() => {
    setIsModalReceivementAddOpen(!isModalReceivementAddOpen)
  }, [isModalReceivementAddOpen])

  useEffect(() => {
    getValueOpen(isModalReceivementAddOpen)
    loadReceivements()
  }, [isModalReceivementAddOpen, reiceivementsList?.debits])
  return (
    <S.Container>
      <S.Div>
        <ReceivementAdd
          isOpen={isModalReceivementAddOpen}
          onClose={handleToggleModalDebitAdd}
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
        {!loadingReceivements && 
          <ListDefault title="Lista de Recebimentos" defaults={receivements} onRemove={onRemove} />
        }
      </S.Div>
    </S.Container>
  )
}

export default Receivement
