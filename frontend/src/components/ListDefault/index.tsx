import * as S from './styles'
export * from './mock'
import React, { useState }from 'react'
import { Default } from '@/gql/models/default'
import { formatData } from 'src/utils/helpers/index'
import Select from '../Select'
import Input from '../Input'
export type TypeListDefault = 'success' | 'error'

export type ListDefaultProps = {
  title: string
  onRemove: (id: string) => void
  defaults: Default[]
}

const ListDefault = ({
  title,
  onRemove,
  defaults
}: ListDefaultProps) => {  
  const [intialDate, setIntialDate] = useState()
  const [finalDate, setFinalDate] = useState()
  const [others, setOthers] = useState()
  const [category, setCategory] = useState()
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
                      label="Titulo ou Descricao"
                      type="text"
                      onInputChange={setOthers}
                      placeholder="Digite o Titulo ou Descricao"
                      isFilter={true}
                    />
                    <Select
                      label="Categoria"
                      value="category"
                      onInputChange={setCategory}
                      options={[
                        'option1',
                        'option2'
                      ]}
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
