import * as S from './styles'
import Modal from '@/components/Modal'

export type CategoryReceivementDeleteProps = {
  isOpen: boolean
  getValueOpen: (value: boolean) => void
  onDelete: (id: string) => void
  id: string
  onClose: () => void
}

const CategoryReceivementDelete = ({
  isOpen,
  getValueOpen,
  id,
  onDelete,
  onClose,
}: CategoryReceivementDeleteProps) => {
  return (
    <Modal
      title="Excluir Categoria de Recebimento"
      isOpen={isOpen}
      getValueOpen={getValueOpen}
    >
      <S.Content>
        Voce realmente deseja excluir essa categoria de recebimento?
      </S.Content>
      <S.Footer>
        <S.ButtonConfirm children='Confirmar' onClick={() => onDelete(id)} typeStyle='success'/>
        <S.ButtonCancel children='Cancelar' onClick={onClose} typeStyle='delete'/>
      </S.Footer>
    </Modal>
  )
}

export default CategoryReceivementDelete