import CategoryReceivementForm from '../categoryReceivementForm'
import Modal from '@/components/Modal'

export type CategoryReceivementProps = {
  isOpen: boolean
  getValueOpen: (value: boolean) => void
  loadCategoryReceivements: () => void
  onClose: () => void
}

const CategoryReceivementAdd = ({
  isOpen,
  getValueOpen,
  loadCategoryReceivements,
  onClose
}: CategoryReceivementProps) => {
  return (
    <Modal
      title="Adicionar Categoria de Recebimento"
      isOpen={isOpen}
      getValueOpen={getValueOpen}
    >
      <CategoryReceivementForm loadCategoryReceivements={loadCategoryReceivements} onClose={onClose} />
    </Modal>
  )
}

export default CategoryReceivementAdd