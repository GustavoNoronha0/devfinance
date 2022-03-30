import DebitForm from '../debitForm'
import Modal from '@/components/Modal'

export type DebitProps = {
  isOpen: boolean
  getValueOpen: (value: boolean) => void
  loadDebits: () => void
  onClose: () => void
}

const DebitAdd = ({
  isOpen,
  getValueOpen,
  loadDebits,
  onClose
}: DebitProps) => {
  return (
    <Modal
      title="Adicionar Debito"
      isOpen={isOpen}
      getValueOpen={getValueOpen}
    >
      <DebitForm loadDebits={loadDebits} onClose={onClose} />
    </Modal>
  )
}

export default DebitAdd