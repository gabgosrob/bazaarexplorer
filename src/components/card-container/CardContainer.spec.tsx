import { fireEvent, render, screen } from '@testing-library/react'

import CardContainer from './CardContainer'
import type { CardProps } from '../card/Card'

const sword: CardProps = {
  name: 'Sword',
  image: 'placeholder.png',
  cooldown: 10,
  effect: 'Deal 10 damage.',
  passive: 'Your other fire items charge 1.5x faster.',
  cost: 5,
  types: ['Weapon', 'Fire'],
  size: 'medium',
}
const blade: CardProps = {
  name: 'Blade',
  image: 'placeholder.png',
  cooldown: 10,
  effect: 'Deal 10 damage.',
  passive: 'Your other fire items do some work!',
  cost: 5,
  types: ['Weapon'],
  size: 'medium',
}

it('renders the cards', () => {
  const cards = [sword, sword, sword]

  render(<CardContainer cards={cards} />)

  expect(screen.queryAllByText(sword.name).length).toBe(cards.length)
})

it('shows the searched items', () => {
  const cards = [sword, blade]

  render(<CardContainer cards={cards} />)

  const inputBox = screen.getByRole('textbox')
  fireEvent.change(inputBox, { target: { value: sword.name } })

  expect(screen.queryByText(blade.name)).toBeNull()
})
