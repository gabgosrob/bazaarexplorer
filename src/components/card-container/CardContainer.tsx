import Card from '../card/Card'
import type { CardProps } from '../card/Card'

export type CardContainerProps = {
  cards: CardProps[]
}

function CardContainer(props: CardContainerProps) {
  const cards = getCards(props.cards)

  return <div className='grid grid-cols-5'>{cards}</div>
}

function getCards(cards: CardProps[]) {
  return cards.map((card, index) => <Card {...card} key={index} />)
}

export default CardContainer
