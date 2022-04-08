import * as S from './styles'
export * from './mock'
import React, { useEffect, useState }from 'react'
import { Default } from '@/gql/models/default'
import { formatData } from 'src/utils/helpers/index'
import Select from '../Select'
import Input from '../Input'
import { useQuery } from '@apollo/client'
import listCategoryDebitsQuery from '@/gql/categoryDebit/ListCategoryDebitsQuery'
import { Category } from '@/gql/models/category'
import listCategoryReceivementsQuery from '@/gql/categoryReceivement/ListCategoryReceivementQuery'
export type TypeListDefault = 'success' | 'error'

export type ListDefaultProps = {
  onRemove: (id: string) => void
  defaults: Default[]
  isDebit?: boolean
  filters?: (initialDate?: Date, finalDate?: Date, category?: string, other?: string) => void
}

const ListDefault = ({
  onRemove,
  defaults,
  filters,
  isDebit
}: ListDefaultProps) => {  
  const [intialDate, setIntialDate] = useState()
  const [finalDate, setFinalDate] = useState()
  const [other, setOther] = useState()
  const [category, setCategory] = useState()
  const [categoriesDebitOptions, setCategoriesDebitOptions] = useState([])
  const [categoryReceivementsOptions, setCategoryReceivementsOptions] = useState([])

  useEffect(() => {
    !!filters && filters(intialDate, finalDate, category, other)
  }, [intialDate, finalDate, category, other])
  
  const pageLoaded = typeof window !== 'undefined';
  const account = pageLoaded ? localStorage.getItem('account') : '';
  const { data: categoryDebits } = useQuery(listCategoryDebitsQuery, {
    variables: { input: { filters: { account }, paginate: { page: 1, limit: 1000 } } },
  });
  const { data: categoryReceivements } = useQuery(listCategoryReceivementsQuery, {
    variables: { input: { filters: { account }, paginate: { page: 1, limit: 1000 } } },
  });
  const loadCategories = async () => {
    if(categoryDebits?.categoryDebits) {
      const categoriesDebitsToOptions = categoryDebits.categoryDebits.items.map((category: Category) => category.title)
      setCategoriesDebitOptions(categoriesDebitsToOptions)
    }
    if(categoryReceivements?.categoryReceivements){
      const categoriesReceivementsToOptions = categoryReceivements.categoryReceivements.items.map((category: Category) => category.title)
      setCategoryReceivementsOptions(categoriesReceivementsToOptions)
    }
  } 
  
  useEffect(() => {
    loadCategories()
  }, [categoryDebits?.categoryDebits, categoryReceivements?.categoryReceivements])
  return (
    <S.Wrapper>
      <S.Animate>
        <S.Motion>
          <S.List>
            <S.DivList>
              <S.Header>
                <S.HeaderLeft>
                   <Input
                      label="Data Inicial"
                      type="date"
                      onInputChange={setIntialDate}
                      placeholder="Digite a data inicial"
                      isFilter={true}
                    />
                    <Input
                      label="Data Final"
                      type="date"
                      onInputChange={setFinalDate}
                      placeholder="Digite a data inicial"
                      isFilter={true}
                    />      
                    <Input
                      label="Outros"
                      type="text"
                      onInputChange={setOther}
                      placeholder="Titulo ou Descricao"
                      isFilter={true}
                    />
                    <Select
                      label="Categoria"
                      value="category"
                      onInputChange={setCategory}
                      options={isDebit ? categoriesDebitOptions : categoryReceivementsOptions}
                      isFilter={true}
                    />
                  </S.HeaderLeft>
              </S.Header>
              <S.Content>
                <S.Table>
                  <S.TableHeader>
                    <S.TableHeadTitle>Title</S.TableHeadTitle>
                    <S.TableHeadDescription>Description</S.TableHeadDescription>
                    <S.TableHeadCategory>Category</S.TableHeadCategory>
                    <S.TableHeadValue>Value</S.TableHeadValue>
                    <S.TableHeadDate>Date</S.TableHeadDate>
                    <S.TableHeadRemove>Excluir</S.TableHeadRemove>
                  </S.TableHeader>

                  {defaults.map((defaultValue) => (
                    <S.TableItem key={defaultValue.id}>
                      <S.TableTitle>{defaultValue.title}</S.TableTitle>
                      <S.TableDescription>{defaultValue.description}</S.TableDescription>
                      <S.TableCategory>{defaultValue.categoryDebit ? defaultValue.categoryDebit?.title : defaultValue.categoryReceivement?.title}</S.TableCategory>
                      <S.TableValue>{defaultValue.value}</S.TableValue>
                      <S.TableDate>{formatData(defaultValue.date.toString())}</S.TableDate>
                      <S.TableIcon onClick={() => onRemove(defaultValue.id)}>
                        <S.IconRemove />
                      </S.TableIcon>
                    </S.TableItem>
                  ))}
                </S.Table>
              </S.Content>
            </S.DivList>
          </S.List>
        </S.Motion>
      </S.Animate>
    </S.Wrapper>
  )
}

export default ListDefault
