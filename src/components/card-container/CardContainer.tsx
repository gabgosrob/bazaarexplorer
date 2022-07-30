import { useState } from 'react'

import Filter from '../filter/Filter'
import Card from '../card/Card'
import type { CardProps } from '../card/Card'

export type CardContainerProps = {
  cards: CardProps[]
}

function CardContainer(props: CardContainerProps) {
  const [search, setSearch] = useState<string>('')
  const [filter, setFilter] = useState<string[]>([])

  const cards = getCards(props.cards, search, filter)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleFilter = (filter: string[]) => {
    setFilter(filter)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div>
        <input type='text' onChange={handleSearch} className='border-2' />
        <Filter handleFilter={handleFilter} />
      </div>
      <div className='flex flex-wrap gap-4 justify-around'>{cards}</div>
    </div>
  )
}

function getCards(cards: CardProps[], search: string, filter: string[]) {
  return cards.map((card, index) => {
    const hasTypeInCommon = card.types.some((type) => filter.indexOf(type) >= 0)
    if (
      card.name.toLowerCase().includes(search.toLowerCase()) &&
      (hasTypeInCommon || !filter.length)
    )
      return <Card {...card} key={index} />
  })
}

export default CardContainer
