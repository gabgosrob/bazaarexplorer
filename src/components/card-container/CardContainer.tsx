import Card from '../card/Card'
import type { CardProps } from '../card/Card'

export type CardContainerProps = {
  cards: CardProps[]
}

function CardContainer(props: CardContainerProps) {
  const cards = getCards(props.cards)

  return <div className='flex flex-wrap gap-4 justify-around'>{cards}</div>
}

function getCards(cards: CardProps[]) {
  return cards.map((card, index) => <Card {...card} key={index} />)
}

export default CardContainer
