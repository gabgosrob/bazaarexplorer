import Card from './components/card/Card'

function App() {
  return (
    <div>
      <Card
        name='Sword'
        image='placeholder.png'
        cooldown={10}
        effect='Deal 10 damage.'
        passive='Your other fire items charge 1.5x faster.'
        cost={5}
        types={['Weapon', 'Fire']}
        size='medium'
      />
    </div>
  )
}

export default App
