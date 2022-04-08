import Button from '@/components/Button'
import ListCategories from '@/components/ListCategories'
import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import CategoryReceivementAdd from './categoryReceivementAdd'
import { Category } from '@/gql/models/category'
import listCategoryReceivementsQuery from '@/gql/categoryReceivement/ListCategoryReceivementQuery'
import { useApolloClient, useMutation, useQuery } from '@apollo/client'
import CategoryReceivementDelete from './categoryReceivementDelete'
import { toast } from 'react-toastify'
import deleteCategoryReceivementMutation from '@/gql/categoryReceivement/DeleteCategoryReceivementMutation'

const CategoryReceivement = () => {
  const [isModalCategoryReceivementAddOpen, setIsModalCategoryReceivementAddOpen] = useState(false)
  const [isModalCategoryReceivementDeleteOpen, setIsModalCategoryReceivementDeleteOpen] = useState(false)
  const [idToDelete, setIdToDelete] = useState('')
  const [categoriesReceivement, setCategoriesReceivement] = useState<Category[]>([])
  const apolloClient = useApolloClient();

  const getValueOpen = (value: boolean) => {
    setIsModalCategoryReceivementAddOpen(value)
  }

  const getValueOpenDelete = (value: boolean) => {
    setIsModalCategoryReceivementDeleteOpen(value)
  }

  const pageLoaded = typeof window !== 'undefined';
  const account = pageLoaded ? localStorage.getItem('account') : '';
  const { data: categoryReceivements, loading: loadingCategoryReceivements, refetch } = useQuery(listCategoryReceivementsQuery, {
    variables: { input: { filters: { account }, paginate: { page: 1, limit: 10 } } },
  });

  const loadCategoryReceivements = async () => {
    await refetch()
    if(categoryReceivements?.categoryReceivements) {
      setCategoriesReceivement(categoryReceivements.categoryReceivements.items)
    }
  }  

  const [deleteCategoryReceivement] = useMutation(deleteCategoryReceivementMutation);

  const handleToggleModalCategoryReceivementAdd = useCallback(() => {
    setIsModalCategoryReceivementAddOpen(!isModalCategoryReceivementAddOpen)
  }, [isModalCategoryReceivementAddOpen])

  const handleToggleModalCategoryReceivementDelete = useCallback(() => {
    setIsModalCategoryReceivementDeleteOpen(!isModalCategoryReceivementDeleteOpen)
  }, [isModalCategoryReceivementDeleteOpen])
  
  const onDelete =  async (id: string) => {
      try {
        handleToggleModalCategoryReceivementDelete()
        await deleteCategoryReceivement({ variables: { id } });
      } catch (error) {
        toast.success('Erro ao excluir categoria!')
      }
      await refetch()
      toast.success('Categoria excluída com sucesso!')
    }

  const onRemove = (id: string) => {
    setIsModalCategoryReceivementDeleteOpen(true)
    setIdToDelete(id)
  }

  useEffect(() => {
    getValueOpen(isModalCategoryReceivementAddOpen)
    getValueOpenDelete(isModalCategoryReceivementDeleteOpen)
  }, [isModalCategoryReceivementAddOpen, isModalCategoryReceivementDeleteOpen])

  const filters = async (initialDate?: Date, finalDate?: Date, other?: string) => {
    const queryParams = {
      query: listCategoryReceivementsQuery,
      variables: { input: { filters: { account, initialDate, finalDate, other }, paginate: { page: 1, limit: 10 } } },
    };
    const { data: categoryReceivements } = await apolloClient.query(queryParams);
    setCategoriesReceivement(categoryReceivements.categoryReceivements.items)
  }

  useEffect(() => {
    loadCategoryReceivements()
  }, [categoryReceivements?.categoryReceivements,])

  return (
    <S.Container>
      <S.Div>
        <CategoryReceivementDelete
          isOpen={isModalCategoryReceivementDeleteOpen}
          onClose={handleToggleModalCategoryReceivementDelete}
          getValueOpen={getValueOpenDelete}
          onDelete={onDelete}
          id={idToDelete}
        />
        <CategoryReceivementAdd
          isOpen={isModalCategoryReceivementAddOpen}
          onClose={handleToggleModalCategoryReceivementAdd}
          getValueOpen={getValueOpen}
          loadCategoryReceivements={loadCategoryReceivements}
        />
        <S.ButtonAdd>
          <Button 
            typeStyle="add" 
            children="Adicionar" 
            onClick={() => {
              setIsModalCategoryReceivementAddOpen(true)
            }}
          />
        </S.ButtonAdd> 
        {!loadingCategoryReceivements &&
          <ListCategories filters={filters} categories={categoriesReceivement} onRemove={onRemove}/>
        }
        </S.Div>
    </S.Container>
  )
}

export default CategoryReceivement
