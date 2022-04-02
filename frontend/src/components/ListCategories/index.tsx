import * as S from './styles'
export * from './mock'
import React, { useState } from 'react'
import { Category } from '@/gql/models/category'
import Input from '../Input'
import Button from '../Button'
export type TypeListCategories = 'success' | 'error'

export type ListCategoriesProps = {
  title: string
  onRemove: (id: string) => void
  categories: Category[]
}

const ListCategories = ({
  title,
  onRemove,
  categories
}: ListCategoriesProps) => {
  const [intialDate, setIntialDate] = useState()
  const [finalDate, setFinalDate] = useState()
  const [others, setOthers] = useState()
  return (
    <S.Wrapper>
      <S.Animate>
        <S.Motion>
          <S.List>
            <S.DivList>
              <S.Header>
                <S.HeaderLeft>
                  <S.TitleList>{title}</S.TitleList>
                </S.HeaderLeft>
                <S.HeaderRight>
                  <S.Filters>
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
                      label="Titulo ou Descricao"
                      type="text"
                      onInputChange={setOthers}
                      placeholder="Digite o Titulo ou Descricao"
                      isFilter={true}
                    />
                    <Button typeStyle="filter" type="submit">
                      Filtrar
                    </Button>
                  </S.Filters>
                </S.HeaderRight>
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
