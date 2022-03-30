import { render, screen } from '@/utils/tests/helpers'

import ListCategories from '.'

describe('<ListCategories />', () => {
  const onRemove = jest.fn()
  it('should render a list default', () => {
    const { container } = render(
      <ListCategories
        title="Titulo da modal"
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
        onRemove={onRemove}
      />
    )

    expect(screen.getByText('Titulo da modal')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
