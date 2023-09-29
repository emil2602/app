import { fireEvent, render, screen } from '@testing-library/react'
import Sidebar from './Sidebar'

describe('Sidebar test', () => {
  test('render test', () => {
    render(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle test', () => {
    render(<Sidebar/>)
    const sidebarToggleBtn = screen.getByTestId('sidebar-toggle')

    expect(sidebarToggleBtn).toBeInTheDocument()

    fireEvent.click(sidebarToggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
