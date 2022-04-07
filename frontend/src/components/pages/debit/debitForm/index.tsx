import * as S from './styles'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Select from '@/components/Select'
import { useMutation, useQuery } from '@apollo/client'
import CreateDebitMutation from '@/gql/debit/CreateDebitMutation'
import { Category } from '@/gql/models/category'
import listCategoryDebitsQuery from '@/gql/categoryDebit/ListCategoryDebitsQuery'

type DebitForm = {
  title: string
  description: string
  account: string
  category: string
  value: string
  date: Date
}

type DebitFormProps = {
  loadDebits: () => void
  onClose: () => void
}

const DebitForm = ({ loadDebits, onClose }: DebitFormProps) => {
  const { handleSubmit } = useForm<DebitForm>()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [value, setValue] = useState(0)
  const [date, setDate] = useState<Date>(new Date())
  const [categoriesDebitOptions, setCategoriesDebitOptions] = useState([])

  const [createDebit] = useMutation(CreateDebitMutation);

  const pageLoaded = typeof window !== 'undefined';
  const account = pageLoaded ? localStorage.getItem('account') : '';
  const handleSubmitDebit = useCallback(async (): Promise<void> => {
    try {
      const input = {
        account,
        title,
        description,
        categoryDebit: category,
        value: Number(value),
        date
      }
      await createDebit({ variables: { input } });
      toast.success('Debito salvo com Sucesso')
      loadDebits()
      onClose()
    } catch (error) {
      toast.error('Erro ao salvar o debito')
    }
  }, [title, description, value, category, date, loadDebits, onClose])

  const { data: categoryDebits } = useQuery(listCategoryDebitsQuery, {
    variables: { input: { filters: { account }, paginate: { page: 1, limit: 1000 } } },
  });
  
  const loadCategories = async () => {
    if(categoryDebits?.categoryDebits) {
      const categoriesDebitsToOptions = categoryDebits.categoryDebits.items.map((category: Category) => category.title)
      setCategoriesDebitOptions(categoriesDebitsToOptions)
    }
  } 
  
  useEffect(() => {
    loadCategories()
  }, [categoryDebits?.categoryDebits])

  return (
    <S.Container>
      <S.DebitForm onSubmit={handleSubmit(handleSubmitDebit)}>
        <S.DebitFormInputies>
          <Input
            label="Title"
            type="text"
            onInputChange={setTitle}
            placeholder="Digite o titulo"
            required
          />
          <Input
            label="Descrição"
            type="text"
            onInputChange={setDescription}
            placeholder="Digite a descrição"
            required
          />
         <Select
            label="Categoria"
            value="category"
            onInputChange={setCategory}
            options={categoriesDebitOptions}
          />
          <Input
            label="Valor"
            type="number"
            onInputChange={setValue}
            placeholder="Digite o valor"
            required
          />
          <Input
            label="Data"
            type="date"
            onInputChange={setDate}
            placeholder="Digite a Data"
            required
          />
        </S.DebitFormInputies>

        <S.DebitFormButton>
          <Button typeStyle="save" type="submit">
            Salvar
          </Button>
        </S.DebitFormButton>
      </S.DebitForm>
    </S.Container>
  )
}

export default DebitForm