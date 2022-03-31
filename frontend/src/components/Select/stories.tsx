import { Story, Meta } from '@storybook/react/types-6-0'
import Select, { SelectProps, SelectMock } from '.'

export default {
  title: 'Components/Select',
  component: Select
} as Meta

export const Default: Story<SelectProps> = (props) => (
  <Select {...props} {...{ error: '' }} />
)

Default.args = SelectMock

export const WithError: Story<SelectProps> = (props) => <Select {...props} />

WithError.args = SelectMock
