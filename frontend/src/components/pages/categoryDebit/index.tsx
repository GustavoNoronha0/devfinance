import Button from '@/components/Button'
import ListCategories from '@/components/ListCategories'
import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import CategoryDebitAdd from './categoryDebitAdd'
import { Category } from '@/gql/models/category'
import listCategoryDebitsQuery from '@/gql/categoryDebit/ListCategoryDebitsQuery'
import { useQuery } from '@apollo/client'

const CategoryDebit = () => {
  const [isModalCategoryDebitAddOpen, setIsModalCategoryDebitAddOpen] = useState(false)
  const [categoriesDebit, setCategoriesDebit] = useState<Category[]>([])

  const getValueOpen = (value: boolean) => {
    setIsModalCategoryDebitAddOpen(value)
  }

  const pageLoaded = typeof window !== 'undefined';
  const account = pageLoaded ? localStorage.getItem('account') : '';
  const { data: categoryDebits, loading: loadingCategoryDebits } = useQuery(listCategoryDebitsQuery, {
    variables: { input: { filters: { account }, paginate: { page: 1, limit: 10 } } },
  });
  const loadCategoryDebits = () => {
    setCategoriesDebit(categoryDebits?.categoryDebits?.items)
  }
  const onRemove = () => {
    console.log('onRemove')
  }
  const handleToggleModalCategoryDebitAdd = useCallback(() => {
    setIsModalCategoryDebitAddOpen(!isModalCategoryDebitAddOpen)
  }, [isModalCategoryDebitAddOpen])

  useEffect(() => {
    getValueOpen(isModalCategoryDebitAddOpen)
    loadCategoryDebits()
  }, [isModalCategoryDebitAddOpen])
  return (
    <S.Container>
      <S.Div>
        <CategoryDebitAdd
          isOpen={isModalCategoryDebitAddOpen}
          onClose={handleToggleModalCategoryDebitAdd}
          getValueOpen={getValueOpen}
          loadCategoryDebits={loadCategoryDebits}
        />
        <S.ButtonAdd>
          <Button 
            typeStyle="add" 
            children="Adicionar" 
            onClick={() => {
              setIsModalCategoryDebitAddOpen(true)
            }}
          />
        </S.ButtonAdd> 
        {!loadingCategoryDebits && 
          <ListCategories title="Lista de Categorias de Debito" categories={categoriesDebit} onRemove={onRemove}/>
        }
        </S.Div>
    </S.Container>
  )
}

export default CategoryDebit
