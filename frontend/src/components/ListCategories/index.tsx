import * as S from './styles'
export * from './mock'
import React, { useState, useEffect } from 'react'
import { Category } from '@/gql/models/category'
import Input from '../Input'
export type TypeListCategories = 'success' | 'error'

export type ListCategoriesProps = {
  onRemove: (id: string) => void
  categories: Category[]
  filters?: (initialDate?: Date, finalDate?: Date, other?: string) => void
}

const ListCategories = ({
  onRemove,
  categories,
  filters
}: ListCategoriesProps) => {
  const [intialDate, setIntialDate] = useState()
  const [finalDate, setFinalDate] = useState()
  const [other, setOther] = useState('')

  useEffect(() => {
    !!filters && filters(intialDate, finalDate, other)
  }, [intialDate, finalDate, other])

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
                </S.HeaderLeft>
              </S.Header>
              <S.Content>
                <S.Table>
                  <S.TableHeader>
                    <S.TableHeadTitle>Title</S.TableHeadTitle>
                    <S.TableHeadDescription>Description</S.TableHeadDescription>
                    <S.TableHeadRemove>Excluir</S.TableHeadRemove>
                  </S.TableHeader>

                  {categories.map((category) => (
                    <S.TableItem key={category.id}>
                      <S.TableTitle>{category.title}</S.TableTitle>
                      <S.TableDescription>{category.description}</S.TableDescription>
                      <S.TableIcon onClick={() => onRemove(category.id)}>
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

export default ListCategories
