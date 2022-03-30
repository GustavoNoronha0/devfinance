import { ModalProps } from '.'
import ListCategories from '../ListCategories'

export const ModalMock: ModalProps = {
  isOpen: false,
  title: 'Add',
  getValueOpen: () => undefined,
  children: (
    <ListCategories
      title='List Categories'
      onRemove={() => undefined}
      categories={[
        {
          id: 'any_id',
          title: 'any_title',
          description: 'any_description'
        },
        {
          id: 'any_id2',
          title: 'any_title',
          description: 'any_description'
        }
      ]}
    />
  )
}
