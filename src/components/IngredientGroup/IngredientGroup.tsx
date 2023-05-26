import { IngredientList } from '../IngredientList'

import { IngredientProps } from '../../shared/types/ingredient'

interface IngredientGroupProps {
  title: string,
  data: ReadonlyArray<IngredientProps>
}

export const IngredientGroup = (props: IngredientGroupProps) => {
  const { title, data } = props

  return (
    <li>
      <h2 className='text text_type_main-medium mt-10 mb-6'>{title}</h2>
      <IngredientList
        data={data}
      />
    </li>
  )
}
