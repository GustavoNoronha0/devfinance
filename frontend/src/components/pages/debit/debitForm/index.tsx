import * as S from './styles'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

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
  const [value, setValue] = useState('')
  const [date, setDate] = useState<Date>(new Date())

  const handleSubmitDebit = useCallback(async (): Promise<void> => {
    try {
      toast.success('Debito salvo com Sucesso')
    } catch (error) {
      toast.error('Erro ao salvar o debito')
    }
  }, [title, description, value, category, date, loadDebits, onClose])

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
          <Input
            label="Categoria"
            type="text"
            onInputChange={setCategory}
            placeholder="Selecione a categoria"
            required
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