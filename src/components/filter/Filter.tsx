import { useState } from 'react'

export type FilterProps = {
  handleFilter: (filter: string[]) => void
  types: string[]
}

function Filter(props: FilterProps) {
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(props.types.length).fill(false)
  )

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      position === index ? !item : item
    )

    props.handleFilter(
      props.types.filter((type, index) => updatedCheckedState[index])
    )

    setCheckedState(updatedCheckedState)
  }

  return (
    <div className='flex gap-4'>
      {props.types.map((type, index) => (
        <div key={index} className='flex gap-1'>
          <input
            type='checkbox'
            name={type}
            value={type}
            checked={checkedState[index]}
            onChange={() => handleOnChange(index)}
          />
          <div>{type}</div>
        </div>
      ))}
    </div>
  )
}

export default Filter
