import Card from '../card/Card'
import type { CardProps } from '../card/Card'
import { useState } from 'react'

export type CardContainerProps = {
  cards: CardProps[]
}

function CardContainer(props: CardContainerProps) {
  const [search, setSearch] = useState('')
  const cards = getCards(props.cards, search)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className='flex flex-col gap-4'>
      <input type='text' onChange={handleSearch} className='border-2' />
      <div className='flex flex-wrap gap-4 justify-around'>{cards}</div>
    </div>
  )
}

function getCards(cards: CardProps[], search: string) {
  return cards.map((card, index) => {
    if (card.name.toLowerCase().includes(search.toLowerCase()))
      return <Card {...card} key={index} />
  })
}

export default CardContainer
