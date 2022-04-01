import Button from '@/components/Button'
import ListCategories from '@/components/ListCategories'
import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import CategoryReceivementAdd from './categoryReceivementAdd'
import { Category } from '@/gql/models/category'

const CategoryReceivement = () => {
  const [isModalCategoryReceivementAddOpen, setIsModalCategoryReceivementAddOpen] = useState(false)
  const [categoriesReceivement, setCategoriesReceivement] = useState<Category[]>([])

  const getValueOpen = (value: boolean) => {
    setIsModalCategoryReceivementAddOpen(value)
  }
  const loadCategoryReceivements = () => {
    setCategoriesReceivement([
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
  const handleToggleModalCategoryReceivementAdd = useCallback(() => {
    setIsModalCategoryReceivementAddOpen(!isModalCategoryReceivementAddOpen)
  }, [isModalCategoryReceivementAddOpen])

  useEffect(() => {
    getValueOpen(isModalCategoryReceivementAddOpen)
    loadCategoryReceivements()
  }, [isModalCategoryReceivementAddOpen])
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
        <ListCategories title="Lista de Categorias de Recebimento" categories={categoriesReceivement} onRemove={onRemove}/>
      </S.Div>
    </S.Container>
  )
}

export default CategoryReceivement
