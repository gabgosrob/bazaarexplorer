import './index.css'

import Card from './components/card/Card'

function App() {
  return (
    <div>
      <Card
        name='Sword'
        cooldown={10}
        effect='Deal 10 damage.'
        passive='pog'
        cost={5}
        types={['Weapon']}
        size='medium'
      />
    </div>
  )
}

export default App
