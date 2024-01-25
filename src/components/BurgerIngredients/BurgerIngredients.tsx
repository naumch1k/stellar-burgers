import { Tab } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab'
import { IngredientGroup } from 'components/IngredientGroup'
import { NutritionFactsModal } from 'components/NutritionFactsModal'
import useIngredientsScroll from './hooks/useIngredientsScroll'
import { IngredientGroups } from 'shared/constants/ingredientGroups'
import styles from './BurgerIngredients.module.css'

export const BurgerIngredients = () => {
  const {
    currentTab,
    handleTabClick,
    handleIngredientsScroll,
    ingredientsRef,
    ingredientGroupRefs,
  } = useIngredientsScroll()

  return (
    <>
      <section className='mt-10'>
        <h1 className='text text_type_main-large'>Build Your Own Burger</h1>
        <ul className={`${styles.tabBar} mt-5`}>
          {IngredientGroups.map(group => (
            <li key={group.type}>
              <Tab
                active={currentTab === group.type}
                value={group.type}
                onClick={handleTabClick}
              >
                {group.label}
              </Tab>
            </li>
          ))}
        </ul>
        <ul
          className={`${styles.menu} custom-scroll`}
          ref={ingredientsRef}
          onScroll={handleIngredientsScroll}
        >
          {IngredientGroups.map(group => (
            <IngredientGroup
              key={group.type}
              type={group.type}
              label={group.label}
              ref={ingredientGroupRefs[group.type]}
            />
          ))}
        </ul>
      </section>
      <NutritionFactsModal/>
    </>
  )
}
