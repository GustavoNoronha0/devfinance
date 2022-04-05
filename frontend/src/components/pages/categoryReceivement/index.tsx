import Button from '@/components/Button'
import ListCategories from '@/components/ListCategories'
import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import CategoryReceivementAdd from './categoryReceivementAdd'
import { Category } from '@/gql/models/category'
import { useQuery } from '@apollo/client'
import listCategoryReceivementsQuery from '@/gql/categoryReceivement/ListCategoryReceivementQuery'

const CategoryReceivement = () => {
  const [isModalCategoryReceivementAddOpen, setIsModalCategoryReceivementAddOpen] = useState(false)
  const [categoriesReceivement, setCategoriesReceivement] = useState<Category[]>([])

  const getValueOpen = (value: boolean) => {
    setIsModalCategoryReceivementAddOpen(value)
  }
  const pageLoaded = typeof window !== 'undefined';
  const account = pageLoaded ? localStorage.getItem('account') : '';
  const { data: categoryReceivements, loading: loadingCategoryReceivements } = useQuery(listCategoryReceivementsQuery, {
    variables: { input: { filters: { account }, paginate: { page: 1, limit: 10 } } },
  });
  const loadCategoryReceivements = () => {
    if(categoryReceivements?.categoryReceivements) {
      setCategoriesReceivement(categoryReceivements.categoryReceivements.items)
    }
  }
  const onRemove = () => {
    console.log('onRemove')
  }
  const handleToggleModalCategoryReceivementAdd = useCallback(() => {
    setIsModalCategoryReceivementAddOpen(!isModalCategoryReceivementAddOpen)
  }, [isModalCategoryReceivementAddOpen])

  useEffect(() => {
    getValueOpen(isModalCategoryReceivementAddOpen)
    loadCategoryReceivements()
  }, [isModalCategoryReceivementAddOpen, categoryReceivements?.categoryReceivements])
  return (
    <S.Container>
      <S.Div>
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
          <ListCategories title="Lista de Categorias de Recebimento" categories={categoriesReceivement} onRemove={onRemove}/>
        }
      </S.Div>
    </S.Container>
  )
}

export default CategoryReceivement
