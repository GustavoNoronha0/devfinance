import * as S from './styles'
import Modal from '@/components/Modal'

export type DebitDeleteProps = {
  isOpen: boolean
  getValueOpen: (value: boolean) => void
  onDelete: (id: string) => void
  id: string
  onClose: () => void
}

const DebitDelete = ({
  isOpen,
  getValueOpen,  
  id,
  onDelete,
  onClose,
}: DebitDeleteProps) => {
  return (
    <Modal
      title="Excluir Debito"
      isOpen={isOpen}
      getValueOpen={getValueOpen}
    >
      <S.Content>
        Voce realmente deseja excluir esse debito?
      </S.Content>
      <S.Footer>
        <S.ButtonConfirm children='Confirmar' onClick={() => onDelete(id)} typeStyle='success'/>
        <S.ButtonCancel children='Cancelar' onClick={onClose} typeStyle='delete'/>
      </S.Footer>
    </Modal>
  )
}

export default DebitDelete