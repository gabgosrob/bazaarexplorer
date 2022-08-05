import { neutralCards } from './assets/cards'
import { neutralTypes } from './assets/cardTypes'

import CardContainer from './components/card-container/CardContainer'

function App() {
  return (
    <div className='m-4'>
      <CardContainer cards={neutralCards} types={neutralTypes} />
    </div>
  )
}

export default App
