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

  const borderColor = getBorderColorClass(props.size)

  return (
    <div
      className={`flex flex-col relative w-[18rem] h-[36rem] border-4 ${borderColor}`}
    >
      <div
        className={`absolute top-0 left-0 p-1 rounded-br-lg border-b-4 border-r-4 ${borderColor} bg-yellow-300`}
      >
        ${props.cost}
      </div>
      <div
        className={`w-full h-1/2 bg-cover`}
        style={{
          backgroundImage: `url(/images/${props.image || 'placeholder.png'})`,
        }}
      ></div>
      <div className='flex flex-col gap-1 h-1/2 m-1.5'>
        <div className='font-bold'>{props.name}</div>
        <div className='flex gap-2'>{types}</div>
        <div>⌛{props.cooldown}s</div>
        <div>{props.effect}</div>
        <div className='overflow-scroll'>{props.passive}</div>
      </div>
    </div>
  )
}

function getTypes(types: string[]) {
  return !types.length ? (
    <div className='py-0.5 px-1.5'>&nbsp;</div>
  ) : (
    types.map((type, index) => (
      <div className='border-2 rounded-xl py-0.5 px-1.5' key={index}>
        {type}
      </div>
    ))
  )
}

function getBorderColorClass(size: string) {
  if (size === 'small') return 'border-green-400'
  else if (size === 'medium') return 'border-yellow-400'
  else return 'border-red-600'
}

export default Card
