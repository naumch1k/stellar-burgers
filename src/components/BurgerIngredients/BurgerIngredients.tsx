import { useState, useRef } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab'
import { IngredientGroup } from 'components/IngredientGroup'
import { IngredientGroups } from 'shared/constants/ingredientGroups'
import { NutritionFactsModal } from 'components/NutritionFactsModal'
import { capitalizeFirstLetter } from 'shared/helpers/capitalizeFirstLetter'
import styles from './BurgerIngredients.module.css'

const { BUNS, BURGERS, TOPPINGS } = IngredientGroups

export const BurgerIngredients = () => {
  const [currentTab, setCurrentTab] = useState(IngredientGroups.BUNS)
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
    <>
      <section className='mt-10'>
        <h1 className='text text_type_main-large'>Build Your Own Burger</h1>
        <ul className={`${styles.tabBar} mt-5`}>
          {Object.keys(IngredientGroups).map(item => (
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
            type='bun'
            ref={bunsIngredientGroupRef}
          />
          <IngredientGroup
            type='burger'
            ref={burgersIngredientGroupRef}
          />
          <IngredientGroup
            type='topping'
            ref={toppingsIngredientGroupRef}
          />
        </ul>
      </section>
      <NutritionFactsModal/>
    </>
  )
}
