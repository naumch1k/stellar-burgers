import { useState, useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab'
import { IngredientGroup } from '../ingredient-group'
import { IngredientGroups } from '../../shared/constants/ingredient-groups'
import { capitalizeFirstLetter } from '../../shared/helpers/capitalize-first-letter'
import { selectIngredients } from '../../store/ingredients/selectors'
import { IIngredient } from '../../shared/types/ingredient'
import styles from './burger-ingredients.module.css'

const { BUNS, BURGERS, TOPPINGS } = IngredientGroups

export const BurgerIngredients = () => {
  const ingredients = useSelector(selectIngredients)
  const [currentTab, setCurrentTab] = useState(IngredientGroups.BUNS)

  const bunsData = useMemo(() => ingredients.filter((ingredient: IIngredient) => ingredient.type === 'bun'), [ingredients])
  const burgerData = useMemo(() => ingredients.filter((ingredient: IIngredient)  => ingredient.type === 'burger'), [ingredients])
  const toppingsData = useMemo(() => ingredients.filter((ingredient: IIngredient) => ingredient.type === 'topping'), [ingredients])

  const ingredientsRef = useRef<HTMLUListElement>(null)
  const bunsIngredientGroupRef = useRef<HTMLHeadingElement>(null)
  const burgersIngredientGroupRef = useRef<HTMLHeadingElement>(null)
  const toppingsIngredientGroupRef = useRef<HTMLHeadingElement>(null)

  const scrollToRef = (ref: React.RefObject<HTMLHeadingElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleTabClick = (ingredientGroup: string) => {
		switch (ingredientGroup) {
			case BUNS: {
        scrollToRef(bunsIngredientGroupRef)
				break
			}
			case BURGERS: {
        scrollToRef(burgersIngredientGroupRef)
				break
			}
			case TOPPINGS: {
        scrollToRef(toppingsIngredientGroupRef)
				break
			}
		}
	}

  const handleIngredientsScroll = () => {
    const lineY = ingredientsRef.current?.getBoundingClientRect().y
    const bunsOffset = Math.abs(bunsIngredientGroupRef.current!.getBoundingClientRect().y - (lineY as number))
    const burgersOffset = Math.abs(burgersIngredientGroupRef.current!.getBoundingClientRect().y - (lineY as number))
		const toppingsOffset = Math.abs(toppingsIngredientGroupRef.current!.getBoundingClientRect().y - (lineY as number))

    if (bunsOffset < burgersOffset && bunsOffset < toppingsOffset)
      setCurrentTab(BUNS)
		if (burgersOffset < bunsOffset && burgersOffset < toppingsOffset)
      setCurrentTab(BURGERS)
    if (toppingsOffset < bunsOffset && toppingsOffset < burgersOffset)
      setCurrentTab(TOPPINGS)
  }

  return (
    <section className='mt-10'>
      <h1 className='text text_type_main-large'>Build Your Own Burger</h1>
      <ul className={`${styles.tabBar} mt-5`}>
        {[BUNS, BURGERS, TOPPINGS].map(item => (
          <li key={item}>
            <Tab
              active={currentTab === item}
              value={item}
              onClick={handleTabClick}
            >
              {capitalizeFirstLetter(item)}
            </Tab>
          </li>
        ))}
      </ul>
      <ul
        className={`${styles.menu} custom-scroll`}
        ref={ingredientsRef}
        onScroll={handleIngredientsScroll}
      >
        <IngredientGroup
          title={capitalizeFirstLetter(BUNS)}
          data={bunsData}
          ref={bunsIngredientGroupRef}
        />
        <IngredientGroup
          title={capitalizeFirstLetter(BURGERS)}
          data={burgerData}
          ref={burgersIngredientGroupRef}
        />
        <IngredientGroup
          title={capitalizeFirstLetter(TOPPINGS)}
          data={toppingsData}
          ref={toppingsIngredientGroupRef}
        />
      </ul>
    </section>
  )
}
