import { ListDefaultProps } from '.'

export const ListDefaultMock: ListDefaultProps = {
  title: 'List Default',
  onRemove: () => undefined,
  defaults: [
    {
      id: 'any_id',
      title: 'any_title',
      description: 'any_description',
      category: 'debit',
      value: '10.00',
      date: new Date()
    },
    {
      id: 'any_id2',
      title: 'any_title',
      category: 'receivement',
      description: 'any_description',
      value: '10.00',
      date: new Date()
    }
  ]
}
