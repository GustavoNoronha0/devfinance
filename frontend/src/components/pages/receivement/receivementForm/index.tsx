import * as S from './styles'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Select from '@/components/Select'
import { useMutation, useQuery } from '@apollo/client'
import createReceivementMutation from '@/gql/receivement/CreateReceivementMutation'
import listCategoryReceivementsQuery from '@/gql/categoryReceivement/ListCategoryReceivementQuery'
import { Category } from '@/gql/models/category'

type ReceivementForm = {
  title: string
  description: string
  account: string
  category: string
  value: string
  date: Date
}

type ReceivementFormProps = {
  loadReceivements: () => void
  onClose: () => void
}

const ReceivementForm = ({ loadReceivements, onClose }: ReceivementFormProps) => {
  const { handleSubmit } = useForm<ReceivementForm>()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [value, setValue] = useState(0)
  const [date, setDate] = useState<Date>(new Date())

  const [createReceivement] = useMutation(createReceivementMutation);
  
  const [categoriesReceivementOptions, setCategoriesReceivementOptions] = useState([])

  const pageLoaded = typeof window !== 'undefined';
  const account =  pageLoaded ? localStorage.getItem('account') : '';
  const handleSubmitReceivement = useCallback(async (): Promise<void> => {
    try {
      const input = {
        account,
        title,
        description,
        categoryReceivement: category,
        value: Number(value),
        date
      }
      await createReceivement({ variables: { input } });
      toast.success('Recebimento salvo com Sucesso')
      onClose()
      loadReceivements()
    } catch (error) {
      toast.error('Erro ao salvar o recebimento')
    }
  }, [title, description, value, category, date, loadReceivements, onClose])

  const { data: categoryReceivements } = useQuery(listCategoryReceivementsQuery, {
    variables: { input: { filters: { account }, paginate: { page: 1, limit: 1000 } } },
  });
  
  const loadCategories = async () => {
    if(categoryReceivements?.categoryReceivements) {
      const categoriesReceivementsToOptions = categoryReceivements.categoryReceivements.items.map((category: Category) => category.title)
      setCategoriesReceivementOptions(categoriesReceivementsToOptions)
    }
  } 
  
  useEffect(() => {
    loadCategories()
  }, [categoryReceivements?.categoryReceivements])

  return (
    <S.Container>
      <S.ReceivementForm onSubmit={handleSubmit(handleSubmitReceivement)}>
        <S.ReceivementFormInputies>
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
            options={categoriesReceivementOptions}
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
        </S.ReceivementFormInputies>

        <S.ReceivementFormButton>
          <Button typeStyle="save" type="submit">
            Salvar
          </Button>
        </S.ReceivementFormButton>
      </S.ReceivementForm>
    </S.Container>
  )
}

export default ReceivementForm