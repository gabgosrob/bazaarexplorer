import { fireEvent, render, screen } from '@testing-library/react'

import Filter from './Filter'

const types = ['Weapon', 'Meal', 'Aquatic']

it('renders the types', () => {
  render(<Filter types={types} handleFilter={(filter: string[]) => {}} />)

  types.forEach((type) => {
    expect(screen.getByText(type)).toBeTruthy()
  })
})

it('calls handleFilter with the right filter', () => {
  const testHandler = jest.fn((filter: string[]) => {})
  render(<Filter types={types} handleFilter={testHandler} />)

  const checkbox = screen.getAllByRole('checkbox')[0]
  fireEvent.click(checkbox)

  expect(testHandler).toHaveBeenCalledWith([checkbox.getAttribute('value')])
})
