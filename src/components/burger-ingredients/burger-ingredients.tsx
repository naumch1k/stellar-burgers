import { useState, useMemo, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab'
import { IngredientGroup } from '../ingredient-group'
import { ingredientGroups } from '../../shared/constants/ingredient-groups'
import { capitalizeFirstLetter } from '../../shared/helpers/capitalize-first-letter'
import { selectIngredients } from '../../store/ingredients/selectors'
import { IIngredient } from '../../shared/types/ingredient'
import styles from './burger-ingredients.module.css'

export const BurgerIngredients = () => {
  const ingredients = useSelector(selectIngredients)
  const [currentTab, setCurrentTab] = useState(ingredientGroups[0])


  const bunsData = useMemo(() => ingredients.filter((ingredient: IIngredient) => ingredient.type === 'bun'), [ingredients])
  const burgerData = useMemo(() => ingredients.filter((ingredient: IIngredient)  => ingredient.type === 'burger'), [ingredients])
  const toppingsData = useMemo(() => ingredients.filter((ingredient: IIngredient) => ingredient.type === 'topping'), [ingredients])

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
