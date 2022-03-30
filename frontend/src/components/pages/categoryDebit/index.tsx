import Button from '@/components/Button'
import ListCategories from '@/components/ListCategories'
import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import CategoryDebitAdd from './categoryDebitAdd'
import { Category } from '@/gql/models/category'

const CategoryDebit = () => {
  const [isModalCategoryDebitAddOpen, setIsModalCategoryDebitAddOpen] = useState(false)
  const [categoriesDebit, setCategoriesDebit] = useState<Category[]>([])

  const getValueOpen = (value: boolean) => {
    setIsModalCategoryDebitAddOpen(value)
  }
  const loadCategoryDebits = () => {
    setCategoriesDebit([
      {
        id: 'any_id',
        title: 'any_title',
        description: 'any_description'
      },
      {
        id: 'any_id2',
        title: 'any_title',
        description: 'any_description'
      }
    ])
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
      <CategoryDebitAdd
        isOpen={isModalCategoryDebitAddOpen}
        onClose={handleToggleModalCategoryDebitAdd}
        getValueOpen={getValueOpen}
        loadCategoryDebits={loadCategoryDebits}
      />
      <Button 
        typeStyle="add" 
        children="Adicionar" 
        onClick={() => {
          setIsModalCategoryDebitAddOpen(true)
        }}
      /> 
      <ListCategories title="Lista de Categorias de Debito" categories={categoriesDebit} onRemove={onRemove}/>
    </S.Container>
  )
}

export default CategoryDebit
