import { render, screen } from '@testing-library/react'

import Card from './Card'

it('demo', () => {
  render(
    <Card
      name='Sword'
      cooldown={10}
      effect='Deal 10 damage.'
      passive='pog'
      cost={5}
      types={['Weapon']}
      size='medium'
    />
  )

  expect(screen.getByText('Sword')).toBeTruthy()
})
