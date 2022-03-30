import { render, screen } from '@/utils/tests/helpers'

import ListDefault from '.'

describe('<ListDefault />', () => {
  const onRemove = jest.fn()
  it('should render a list default', () => {
    const { container } = render(
      <ListDefault
        title="Titulo da modal"
        defaults={[
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
        ]}
        onRemove={onRemove}
      />
    )

    expect(screen.getByText('Titulo da modal')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
