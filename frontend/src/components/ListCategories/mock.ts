import { ListCategoriesProps } from '.'

export const ListCategoriesMock: ListCategoriesProps = {
  title: 'List Categories',
  onRemove: () => undefined,
  categories: [
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
  ]
}
