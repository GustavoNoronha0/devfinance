import { Story, Meta } from '@storybook/react/types-6-0'
import ListDefault, { ListDefaultProps, ListDefaultMock } from '.'

export default {
  title: 'Components/ListDefault',
  component: ListDefault
} as Meta

export const Default: Story<ListDefaultProps> = (props) => <ListDefault {...props} />

Default.args = ListDefaultMock
