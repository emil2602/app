import { render, screen } from '@testing-library/react'
import Button from './Button'

describe(('render test'), () => {
  test('render test', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
