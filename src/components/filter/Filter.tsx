import { useState } from 'react'

export type FilterProps = {
  handleFilter: (filter: string[]) => void
}

function Filter(props: FilterProps) {
  const types = [
    'Weapon',
    'Meal',
    'Vehicle',
    'Gear',
    'Aquatic',
    'Monstrous',
    'Friend',
  ]

  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(types.length).fill(false)
  )

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      position === index ? !item : item
    )

    props.handleFilter(
      types.filter((type, index) => updatedCheckedState[index])
    )

    setCheckedState(updatedCheckedState)
  }

  return (
    <div>
      {types.map((type, index) => (
        <label key={index}>
          {type}{' '}
          <input
            type='checkbox'
            name={type}
            value={type}
            checked={checkedState[index]}
            onChange={() => handleOnChange(index)}
          />
        </label>
      ))}
    </div>
  )
}

export default Filter
