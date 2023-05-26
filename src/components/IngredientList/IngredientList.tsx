import { Ingredient } from '../Ingredient'

import { IngredientProps } from '../../shared/types/ingredient'

import styles from './IngredientList.module.css'

interface IngredientListProps {
  data: ReadonlyArray<IngredientProps>
}

export const IngredientList = (props: IngredientListProps) => {
  const { data } = props

  return (
    <ul className={`${styles.root} pr-4 pb-10 pl-4`}>
      {data.map(item => (
        <Ingredient
          key={item._id}
          type={item.type}
          _id={item._id}
          name={item.name}
          image={item.image}
          price={item.price}
        />
      ))}
    </ul>
  )
}
