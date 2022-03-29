import { Story, Meta } from '@storybook/react/types-6-0'
import ListCategories, { ListCategoriesProps, ListCategoriesMock } from '.'

export default {
  title: 'Components/ListCategories',
  component: ListCategories
} as Meta

export const Default: Story<ListCategoriesProps> = (props) => <ListCategories {...props} />

Default.args = ListCategoriesMock
