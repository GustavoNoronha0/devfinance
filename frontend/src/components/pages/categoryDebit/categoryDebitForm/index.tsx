import * as S from './styles'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import CreateCategoryDebitMutation from '@/gql/categoryDebit/CreateCategoryDebitMutation'
import { useMutation } from '@apollo/client'

type CategoryDebitForm = {
  title: string
  description: string
}

type CategoryDebitFormProps = {
  loadCategoryDebits: () => void
  onClose: () => void
}

const CategoryDebitForm = ({ loadCategoryDebits, onClose }: CategoryDebitFormProps) => {
  const { handleSubmit } = useForm<CategoryDebitForm>()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [createCategoryDebit] = useMutation(CreateCategoryDebitMutation);

  const handleSubmitCategoryDebit = useCallback(async (): Promise<void> => {
    try {
      const pageLoaded = typeof window !== 'undefined';
      const account =  pageLoaded ? localStorage.getItem('account') : '';
      const input = {
        account,
        title,
        description
      }
      loadCategoryDebits()
      await createCategoryDebit({ variables: { input } });
      toast.success('Categoria de Debito salva com Sucesso')
      onClose()
    } catch (error) {
      toast.error('Erro ao salvar a categoria do debito')
    }
  }, [title, description, loadCategoryDebits, onClose])

  return (
    <S.Container>
      <S.CategoryDebitForm onSubmit={handleSubmit(handleSubmitCategoryDebit)}>
        <S.CategoryDebitFormInputies>
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
        </S.CategoryDebitFormInputies>

        <S.CategoryDebitFormButton>
          <Button typeStyle="save" type="submit">
            Salvar
          </Button>
        </S.CategoryDebitFormButton>
      </S.CategoryDebitForm>
    </S.Container>
  )
}

export default CategoryDebitForm