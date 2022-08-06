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

  const buttonStyle =
    'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'

  return (
    <div className='m-4 flex flex-col gap-4'>
      <div className='flex gap-4 justify-center'>
        <button className={buttonStyle} onClick={() => useNeutralCards()}>
          Neutral
        </button>
        <button className={buttonStyle} onClick={() => usePygmalienCards()}>
          Pygmalien
        </button>
        <button className={buttonStyle} onClick={() => useVanessaCards()}>
          Vanessa
        </button>
        <button className={buttonStyle} onClick={() => useDooleyCards()}>
          Dooley
        </button>
        <button className={buttonStyle} onClick={() => useJulesCards()}>
          Jules
        </button>
        <button className={buttonStyle} onClick={() => useStelleCards()}>
          Stelle
        </button>
      </div>
      <CardContainer cards={cards} types={types} />
    </div>
  )
}

export default App
