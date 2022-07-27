import { render, screen } from '@testing-library/react'

import CardContainer from './CardContainer'
import type { CardProps } from '../card/Card'

it('renders the cards', () => {
  const card: CardProps = {
    name: 'Sword',
    image: 'placeholder.png',
    cooldown: 10,
    effect: 'Deal 10 damage.',
    passive: 'Your other fire items charge 1.5x faster.',
    cost: 5,
    types: ['Weapon', 'Fire'],
    size: 'medium',
  }

  const cards = [card, card, card]

  render(<CardContainer cards={cards} />)

  expect(screen.getAllByText(card.name).length).toBe(cards.length)
})
