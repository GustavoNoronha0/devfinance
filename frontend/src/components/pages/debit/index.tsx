import Button from '@/components/Button'
import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import DebitAdd from './debitAdd'
import {  } from '@/gql/models/category'
import listDebitsQuery from '@/gql/debit/ListDebitsQuery'
import { useApolloClient, useMutation, useQuery } from '@apollo/client'
import { toast } from 'react-toastify'
import deleteDebitMutation from '@/gql/debit/DeleteDebitMutation'
import ListDefault from '@/components/ListDefault'
import DebitDelete from './debitDelete'

const Debit = () => {
  const [isModalDebitAddOpen, setIsModalDebitAddOpen] = useState(false)
  const [isModalDebitDeleteOpen, setIsModalDebitDeleteOpen] = useState(false)
  const [idToDelete, setIdToDelete] = useState('')
  const [defaults, setDebits] = useState<[]>([])
  const apolloClient = useApolloClient();

  const getValueOpen = (value: boolean) => {
    setIsModalDebitAddOpen(value)
  }

  const getValueOpenDelete = (value: boolean) => {
    setIsModalDebitDeleteOpen(value)
  }

  const pageLoaded = typeof window !== 'undefined';
  const account = pageLoaded ? localStorage.getItem('account') : '';
  const { data: debits, loading: loadingDebits, refetch } = useQuery(listDebitsQuery, {
    variables: { input: { filters: { account }, paginate: { page: 1, limit: 10 } } },
  });

  const loadDebits = async () => {
    await refetch()
    if(debits?.debits) {
      setDebits(debits.debits.items)
    }
  }  

  const [deleteDebit] = useMutation(deleteDebitMutation);

  const handleToggleModalDebitAdd = useCallback(() => {
    setIsModalDebitAddOpen(!isModalDebitAddOpen)
  }, [isModalDebitAddOpen])

  const handleToggleModalDebitDelete = useCallback(() => {
    setIsModalDebitDeleteOpen(!isModalDebitDeleteOpen)
  }, [isModalDebitDeleteOpen])
  
  const onDelete =  async (id: string) => {
      try {
        handleToggleModalDebitDelete()
        await deleteDebit({ variables: { id } });
      } catch (error) {
        toast.success('Erro ao excluir categoria!')
      }
      await refetch()
      toast.success('Categoria excluída com sucesso!')
    }

  const onRemove = (id: string) => {
    setIsModalDebitDeleteOpen(true)
    setIdToDelete(id)
  }

  useEffect(() => {
    getValueOpen(isModalDebitAddOpen)
    getValueOpenDelete(isModalDebitDeleteOpen)
  }, [isModalDebitAddOpen, isModalDebitDeleteOpen])

  const filters = async (initialDate?: Date, finalDate?: Date, category?: string, other?: string) => {
    const queryParams = {
      query: listDebitsQuery,
      variables: { input: { filters: { account, initialDate, finalDate, category, other }, paginate: { page: 1, limit: 10 } } },
    };
    const { data: debits } = await apolloClient.query(queryParams);
    setDebits(debits.debits.items)
  }

  useEffect(() => {
    loadDebits()
  }, [debits?.debits])

  return (
    <S.Container>
      <S.Div>
        <DebitDelete
          isOpen={isModalDebitDeleteOpen}
          onClose={handleToggleModalDebitDelete}
          getValueOpen={getValueOpenDelete}
          onDelete={onDelete}
          id={idToDelete}
        />
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
          <ListDefault filters={filters} defaults={defaults} onRemove={onRemove} isDebit/>
        }
        </S.Div>
    </S.Container>
  )
}

export default Debit
