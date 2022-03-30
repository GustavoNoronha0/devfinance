import Button from '@/components/Button'
import ListCategories from '@/components/ListCategories'
import React, { useState } from 'react'
import * as S from './styles'

const CategoryDebit = () => {
  const categoriesDebit = [
    {
      id: 'any_id',
      title: 'any_title',
      description: 'any_description'
    },
    {
      id: 'any_id',
      title: 'any_title',
      description: 'any_description'
    }
  ]
  const onRemove = () => {
    console.log('onRemove')
  }
  return (
    <S.Container>
      <Button 
        typeStyle="add" 
        children="Adicionar" 
      /> 
      <ListCategories title="Lista de Categorias de Debito" categories={categoriesDebit} onRemove={onRemove}/>
    </S.Container>
  )
}

export default CategoryDebit
