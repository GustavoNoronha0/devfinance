import CategoryDebitForm from '../categoryDebitForm'
import Modal from '@/components/Modal'

export type CategoryDebitProps = {
  isOpen: boolean
  getValueOpen: (value: boolean) => void
  loadCategoryDebits: () => void
  onClose: () => void
}

const CategoryDebitAdd = ({
  isOpen,
  getValueOpen,
  loadCategoryDebits,
  onClose
}: CategoryDebitProps) => {
  return (
    <Modal
      title="Adicionar Categoria de Debito"
      isOpen={isOpen}
      getValueOpen={getValueOpen}
    >
      <CategoryDebitForm loadCategoryDebits={loadCategoryDebits} onClose={onClose} />
    </Modal>
  )
}

export default CategoryDebitAdd