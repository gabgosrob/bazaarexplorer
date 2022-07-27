import type { CardProps } from '../components/card/Card'

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

export const cards = [card, card, card, card, card]
