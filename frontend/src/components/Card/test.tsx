import { render, screen } from '@/utils/tests/helpers'

import Card from '.'
import userEvent from '@testing-library/user-event'

describe('<Card />', () => {
  const onClick = jest.fn()
  it('should render a card default', () => {
    const { container } = render(
      <Card
        count="10"
        title="Titulo da modal"
        onClick={onClick}
      />
    )

    expect(screen.getByText('Titulo da modal')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a card with color style', () => {
    render(
      <Card
        count="10"
        title="Titulo da modal"
        onClick={onClick}
      />
    )

    expect(screen.getByText('Titulo da modal')).toBeInTheDocument()
    const wrapperCard = screen.getByTestId('WrapperCard')
    expect(wrapperCard).toHaveStyle({
      width: 'fit-content'
    })
  })

  it('should on card click call onClick function', () => {
    const mockCallback = jest.fn((number: number) => number + 1)

    const onCardClick = jest.fn(() => mockCallback(1))

    render(
      <Card
        count="10"
        title="Titulo da modal"
        onClick={onCardClick}
      />
    )

    const cardToClick = screen.getByText('Titulo da modal')

    userEvent.click(cardToClick)

    expect(onCardClick).toHaveBeenCalledTimes(1)
    expect(onCardClick).toReturnWith(2)
  })
})
