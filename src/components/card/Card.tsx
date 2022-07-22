type CardProps = {
  name: string
  artUrl?: string
  cooldown: number
  effect: string
  passive: string
  cost: number
  types: string[]
  size: 'small' | 'medium' | 'large'
}

function Card(props: CardProps) {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.cooldown}</div>
      <div>{props.effect}</div>
      <div>{props.passive}</div>
      <div>{props.cost}</div>
      <div>{props.size}</div>
    </div>
  )
}

export default Card
