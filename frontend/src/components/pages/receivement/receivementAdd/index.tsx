import ReceivementForm from '../receivementForm'
import Modal from '@/components/Modal'

export type ReceivementProps = {
  isOpen: boolean
  getValueOpen: (value: boolean) => void
  loadReceivements: () => void
  onClose: () => void
}

const ReceivementAdd = ({
  isOpen,
  getValueOpen,
  loadReceivements,
  onClose
}: ReceivementProps) => {
  return (
    <Modal
      title="Adicionar Recebimento"
      isOpen={isOpen}
      getValueOpen={getValueOpen}
    >
      <ReceivementForm loadReceivements={loadReceivements} onClose={onClose} />
    </Modal>
  )
}

export default ReceivementAdd