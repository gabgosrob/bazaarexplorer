import { cards } from './assets/cards'

import CardContainer from './components/card-container/CardContainer'

function App() {
  return (
    <div className='m-4'>
      <CardContainer cards={cards} />
    </div>
  )
}

export default App
