import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen, waitFor } from '@/utils/tests/helpers'
import theme from '@/styles/theme'
import Select from '.'

describe('<Select />', () => {
  it('should render input with placeholder', () => {
    render(
      <Select 
        label="Text Field" 
        placeholder="Form Field Text" 
        options={[
          'option1',
          'option2'
        ]}
      />
    )
    expect(screen.getByPlaceholderText('Form Field Text')).toHaveStyle({
      width: '282px'
    })
  })

  it('should render input without Label', () => {
    render(  
      <Select 
        placeholder="Form Field Text" 
        options={[
          'option1',
          'option2'
        ]}
      />
    )
    expect(screen.queryByText('Label Name')).not.toBeInTheDocument()
  })

  it('should render input with Label', () => {
    render(  
      <Select 
        placeholder="Form Field Text" 
        options={[
          'option1',
          'option2'
        ]}
      />
    )
    expect(screen.queryByText('Label Name')).toBeInTheDocument()
  })

  it('should render input with error', () => {
    render(
      <Select 
        label="Text Field" 
        placeholder="Form Field Text" 
        options={[
          'option1',
          'option2'
        ]}
        error="error"
      />
    )
    expect(screen.queryByText('Error message')).toHaveStyle({
      color: `${theme.colors.baseColorRed}`
    })
  })

  it('should does not changes its value when disabled', async () => {
    const onSelectChange = jest.fn()
    render(
      <Select
        onChange={onSelectChange}
        label="Label Name"
        error="Error message"
        placeholder="Placeholder"
        value="email"
        disabled
        options={[
          'option1',
          'option2'
        ]}
      />
    )
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
    const text = 'This is my new text'
    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onSelectChange).not.toHaveBeenCalled()
  })

  it('should changes its value when typing', async () => {
    const onSelectChange = jest.fn()
    render(
      <Select
        onChange={onSelectChange}
        label="Label Name"
        error="Error message"
        placeholder="Placeholder"
        value="email"
        options={[
          'option1',
          'option2'
        ]}
      />
    )
    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onSelectChange).toHaveBeenCalledTimes(text.length)
    })
    expect(onSelectChange).toHaveBeenCalledWith(text)
  })

  it('should render default Select with focus', () => {
    render(
      <Select
        label="Label Name"
        error="Error message"
        placeholder="Placeholder"
        value="email"
        options={[
          'option1',
          'option2'
        ]}
      />
    )
    const input = screen.getByPlaceholderText('Placeholder')

    userEvent.type(input, 'value')
    expect(input).toHaveFocus()
  })

  it('should render default Text field without focus', () => {
    render(
      <Select
        label="Label Name"
        error="Error message"
        placeholder="Placeholder"
        value="email"
        options={[
          'option1',
          'option2'
        ]}
      />
    )
    const input = screen.getByPlaceholderText('Placeholder')

    fireEvent.blur(input)
    expect(input).toBeInTheDocument()
  })
})
