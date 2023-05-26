import { useState, useMemo } from 'react'

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab'
import { IngredientGroup } from '../IngredientGroup'
import { ingredientGroups } from '../../shared/constants/ingredient-groups'
import { capitalizeFirstLetter } from '../../shared/helpers/capitalizeFirstLetter'

import { IngredientProps } from '../../shared/types/ingredient'

import styles from './BurgerIngredients.module.css'

interface BurgerIngredientsProps {
  data: ReadonlyArray<IngredientProps>,
}

export const BurgerIngredients = (props: BurgerIngredientsProps) => {
  const { data } = props

  const [currentTab, setCurrentTab] = useState(ingredientGroups[0])

  const bunsData = useMemo(() => data.filter(item => item.type === 'bun'), [data])
  const burgerData = useMemo(() => data.filter(item => item.type === 'burger'), [data])
  const toppingsData = useMemo(() => data.filter(item => item.type === 'topping'), [data])

  return (
    <section className='mt-10'>
      <h1 className='text text_type_main-large'>Build Your Own Burger</h1>
      <ul className={`${styles.tabBar} mt-5`}>
        {ingredientGroups.map((item, idx) => (
          <li key={idx}>
            <Tab
              active={currentTab === item}
              value={item}
              onClick={setCurrentTab}
            >
              {capitalizeFirstLetter(item)}
            </Tab>
          </li>
        ))}
      </ul>
      <div>
        <IngredientGroup
          title='Buns'
          data={bunsData}
        />
        <IngredientGroup
          title='Burger'
          data={burgerData}
        />
        <IngredientGroup
          title='Toppings'
          data={toppingsData}
        />
      </div>
    </section>
  )
}
