import { useState } from 'react'

import {
  neutralCards,
  pygmalienCards,
  vanessaCards,
  dooleyCards,
  julesCards,
  stelleCards,
} from './assets/cards'
import {
  neutralTypes,
  pygmalienTypes,
  vanessaTypes,
  dooleyTypes,
  julesTypes,
  stelleTypes,
} from './assets/cardTypes'

import CardContainer from './components/card-container/CardContainer'
import { CardProps } from './components/card/Card'

function App() {
  const [cards, setCards] = useState<CardProps[]>(neutralCards)
  const [types, setTypes] = useState<string[]>(neutralTypes)

  const useNeutralCards = () => {
    setCards(neutralCards)
    setTypes(neutralTypes)
  }

  const usePygmalienCards = () => {
    setCards(pygmalienCards)
    setTypes(pygmalienTypes)
  }

  const useVanessaCards = () => {
    setCards(vanessaCards)
    setTypes(vanessaTypes)
  }

  const useDooleyCards = () => {
    setCards(dooleyCards)
    setTypes(dooleyTypes)
  }

  const useJulesCards = () => {
    setCards(julesCards)
    setTypes(julesTypes)
  }

  const useStelleCards = () => {
    setCards(stelleCards)
    setTypes(stelleTypes)
  }

  return (
    <div className='m-4 '>
      <div className='flex gap-4'>
        <button onClick={() => useNeutralCards()}>Neutral</button>
        <button onClick={() => usePygmalienCards()}>Pygmalien</button>
        <button onClick={() => useVanessaCards()}>Vanessa</button>
        <button onClick={() => useDooleyCards()}>Dooley</button>
        <button onClick={() => useJulesCards()}>Jules</button>
        <button onClick={() => useStelleCards()}>Stelle</button>
      </div>
      <CardContainer cards={cards} types={types} />
    </div>
  )
}

export default App
