import { Tab } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab'
import { IngredientGroup } from 'components/IngredientGroup'
import { NutritionFactsModal } from 'components/NutritionFactsModal'
import useIngredientsScroll from './hooks/useIngredientsScroll'
import { IngredientGroups } from 'shared/constants/ingredientGroups'
import { capitalizeFirstLetter } from 'shared/helpers/capitalizeFirstLetter'
import styles from './BurgerIngredients.module.css'

export const BurgerIngredients = () => {
  const {
    currentTab,
    handleTabClick,
    handleIngredientsScroll,
    ingredientsRef,
    bunsIngredientGroupRef,
    burgersIngredientGroupRef,
    toppingsIngredientGroupRef,
  } = useIngredientsScroll()

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
