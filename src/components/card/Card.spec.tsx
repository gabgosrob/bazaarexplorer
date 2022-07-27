import { render, screen } from '@testing-library/react'

import Card from './Card'

it('renders the card', () => {
  const name = 'Sword'
  const cooldown = 10
  const effect = 'Deal 10 damage.'
  const passive = 'pog'
  const cost = 5
  const types = ['Weapon']
  const size = 'medium'

  render(
    <Card
      name={name}
      cooldown={cooldown}
      effect={effect}
      passive={passive}
      cost={cost}
      types={types}
      size={size}
    />
  )

  expect(screen.getByText(name)).toBeTruthy()
})
