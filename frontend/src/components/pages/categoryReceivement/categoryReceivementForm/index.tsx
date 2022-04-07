import * as S from './styles'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useMutation } from '@apollo/client'
import createCategoryReceivementMutation from '@/gql/categoryReceivement/CreateCategoryReceivementMutation'

type CategoryReceivementForm = {
  title: string
  descrition: string
}

type CategoryReceivementFormProps = {
  loadCategoryReceivements: () => void
  onClose: () => void
}

const CategoryReceivementForm = ({ loadCategoryReceivements, onClose }: CategoryReceivementFormProps) => {
  const { handleSubmit } = useForm<CategoryReceivementForm>()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [createCategoryReceivement] = useMutation(createCategoryReceivementMutation);

  const handleSubmitCategoryReceivement = useCallback(async (): Promise<void> => {
    try {
      const pageLoaded = typeof window !== 'undefined';
      const account =  pageLoaded ? localStorage.getItem('account') : '';
      const input = {
        account,
        title,
        description
      }
      await createCategoryReceivement({ variables: { input } });
      toast.success('Categoria de recebimento salva com Sucesso')
      loadCategoryReceivements()
      onClose() 
    } catch (error) {
      toast.error('Erro ao salvar a categoria do recebimento')
    }
  }, [title, description, loadCategoryReceivements, onClose])

  return (
    <S.Container>
      <S.CategoryReceivementForm onSubmit={handleSubmit(handleSubmitCategoryReceivement)}>
        <S.CategoryReceivementFormInputies>
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
        </S.CategoryReceivementFormInputies>

        <S.CategoryReceivementFormButton>
          <Button typeStyle="save" type="submit">
            Salvar
          </Button>
        </S.CategoryReceivementFormButton>
      </S.CategoryReceivementForm>
    </S.Container>
  )
}

export default CategoryReceivementForm