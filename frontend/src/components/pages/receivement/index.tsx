import Button from '@/components/Button'
import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import ReceivementAdd from './receivementAdd'
import {  } from '@/gql/models/category'
import listReceivementsQuery from '@/gql/receivement/ListReceivementsQuery'
import { useApolloClient, useMutation, useQuery } from '@apollo/client'
import { toast } from 'react-toastify'
import deleteReceivementMutation from '@/gql/receivement/DeleteReceivementMutation'
import ListDefault from '@/components/ListDefault'
import ReceivementDelete from './receivementDelete'

const Receivement = () => {
  const [isModalReceivementAddOpen, setIsModalReceivementAddOpen] = useState(false)
  const [isModalReceivementDeleteOpen, setIsModalReceivementDeleteOpen] = useState(false)
  const [idToDelete, setIdToDelete] = useState('')
  const [defaults, setReceivements] = useState<[]>([])
  const apolloClient = useApolloClient();

  const getValueOpen = (value: boolean) => {
    setIsModalReceivementAddOpen(value)
  }

  const getValueOpenDelete = (value: boolean) => {
    setIsModalReceivementDeleteOpen(value)
  }

  const pageLoaded = typeof window !== 'undefined';
  const account = pageLoaded ? localStorage.getItem('account') : '';
  const { data: receivements, loading: loadingReceivements, refetch } = useQuery(listReceivementsQuery, {
    variables: { input: { filters: { account }, paginate: { page: 1, limit: 10 } } },
  });

  const loadReceivements = async () => {
    await refetch()
    if(receivements?.receivements) {
      setReceivements(receivements.receivements.items)
    }
  }  

  const [deleteReceivement] = useMutation(deleteReceivementMutation);

  const handleToggleModalReceivementAdd = useCallback(() => {
    setIsModalReceivementAddOpen(!isModalReceivementAddOpen)
  }, [isModalReceivementAddOpen])

  const handleToggleModalReceivementDelete = useCallback(() => {
    setIsModalReceivementDeleteOpen(!isModalReceivementDeleteOpen)
  }, [isModalReceivementDeleteOpen])
  
  const onDelete =  async (id: string) => {
      try {
        handleToggleModalReceivementDelete()
        await deleteReceivement({ variables: { id } });
      } catch (error) {
        toast.success('Erro ao excluir categoria!')
      }
      await refetch()
      toast.success('Categoria excluída com sucesso!')
    }

  const onRemove = (id: string) => {
    setIsModalReceivementDeleteOpen(true)
    setIdToDelete(id)
  }

  useEffect(() => {
    getValueOpen(isModalReceivementAddOpen)
    getValueOpenDelete(isModalReceivementDeleteOpen)
  }, [isModalReceivementAddOpen, isModalReceivementDeleteOpen])

  const filters = async (initialDate?: Date, finalDate?: Date, category?: string, other?: string) => {
    const queryParams = {
      query: listReceivementsQuery,
      variables: { input: { filters: { account, initialDate, finalDate, category, other }, paginate: { page: 1, limit: 10 } } },
    };
    const { data: receivements } = await apolloClient.query(queryParams);
    setReceivements(receivements.receivements.items)
  }

  useEffect(() => {
    loadReceivements()
  }, [receivements?.receivements])

  return (
    <S.Container>
      <S.Div>
        <ReceivementDelete
          isOpen={isModalReceivementDeleteOpen}
          onClose={handleToggleModalReceivementDelete}
          getValueOpen={getValueOpenDelete}
          onDelete={onDelete}
          id={idToDelete}
        />
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
        {!loadingReceivements &&
          <ListDefault filters={filters} defaults={defaults} onRemove={onRemove}/>
        }
        </S.Div>
    </S.Container>
  )
}

export default Receivement
