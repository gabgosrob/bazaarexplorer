export type CardProps = {
  name: string
  image?: string
  cooldown: number
  effect: string
  passive: string
  cost: number
  types: string[]
  size: 'small' | 'medium' | 'large'
}

function Card(props: CardProps) {
  const types = getTypes(props.types)

  return (
    <div className='flex'>
      <img
        src={'images/' + props.image}
        alt='Card art'
        className='min-w-[10vw] h-[10vw]'
      />
      <div className='flex flex-col justify-between text-[1vw]'>
        <div>
          <div>{props.name}</div>
          <div className='flex'>{types}</div>
        </div>
        <div className='flex'>
          <div>{props.cooldown}s</div>
          <div>{props.effect}</div>
        </div>
        <div>{props.passive}</div>
      </div>
    </div>
  )
}

function getTypes(types: string[]) {
  return types.map((type, index) => <div key={index}>{type}</div>)
}

export default Card
