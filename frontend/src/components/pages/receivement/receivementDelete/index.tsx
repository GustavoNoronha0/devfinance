import * as S from './styles'
import Modal from '@/components/Modal'

export type ReceivementDeleteProps = {
  isOpen: boolean
  getValueOpen: (value: boolean) => void
  onDelete: (id: string) => void
  id: string
  onClose: () => void
}

const ReceivementDelete = ({
  isOpen,
  getValueOpen,  
  id,
  onDelete,
  onClose,
}: ReceivementDeleteProps) => {
  return (
    <Modal
      title="Excluir Recebimento"
      isOpen={isOpen}
      getValueOpen={getValueOpen}
    >
      <S.Content>
        Voce realmente deseja excluir esse recebimento?
      </S.Content>
      <S.Footer>
        <S.ButtonConfirm children='Confirmar' onClick={() => onDelete(id)} typeStyle='success'/>
        <S.ButtonCancel children='Cancelar' onClick={onClose} typeStyle='delete'/>
      </S.Footer>
    </Modal>
  )
}

export default ReceivementDelete