import { useState, useMemo, useEffect, useRef } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab'
import { IngredientGroup } from '../IngredientGroup'
import { ingredientGroups } from '../../shared/constants/ingredient-groups'
import { capitalizeFirstLetter } from '../../shared/helpers/capitalizeFirstLetter'
import { IngredientProps } from '../../shared/types/ingredient'
import styles from './BurgerIngredients.module.css'

interface BurgerIngredientsProps {
  ingredients: IngredientProps[],
}

export const BurgerIngredients = (props: BurgerIngredientsProps) => {
  const { ingredients } = props

  const [currentTab, setCurrentTab] = useState(ingredientGroups[0])

  const bunsData = useMemo(() => ingredients.filter(ingredient => ingredient.type === 'bun'), [ingredients])
  const burgerData = useMemo(() => ingredients.filter(ingredient => ingredient.type === 'burger'), [ingredients])
  const toppingsData = useMemo(() => ingredients.filter(ingredient => ingredient.type === 'topping'), [ingredients])

  const bunsIngredientGroup = useRef<HTMLHeadingElement>(null)
  const burgersIngredientGroup = useRef<HTMLHeadingElement>(null)
  const toppingsIngredientGroup = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    switch (currentTab) {
      case 'buns':
        scrollToRef(bunsIngredientGroup)
        break
      case 'burgers':
        scrollToRef(burgersIngredientGroup)
        break
      case 'toppings':
        scrollToRef(toppingsIngredientGroup)
        break
      default:
        break
    }
  }, [currentTab])

  const scrollToRef = (ref: React.RefObject<HTMLHeadingElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className='mt-10'>
      <h1 className='text text_type_main-large'>Build Your Own Burger</h1>
      <ul className={`${styles.tabBar} mt-5`}>
        {ingredientGroups.map((item) => (
          <li key={item}>
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
      <ul className={`${styles.menu} custom-scroll`}>
        <IngredientGroup
          title='Buns'
          data={bunsData}
          ref={bunsIngredientGroup}
        />
        <IngredientGroup
          title='Burger'
          data={burgerData}
          ref={burgersIngredientGroup}
        />
        <IngredientGroup
          title='Toppings'
          data={toppingsData}
          ref={toppingsIngredientGroup}
        />
      </ul>
    </section>
  )
}
