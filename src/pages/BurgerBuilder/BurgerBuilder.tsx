import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BurgerIngredients } from 'components/BurgerIngredients'
import { BurgerConstructor } from 'components/BurgerConstructor'
import styles from './BurgerBuilder.module.css'

const BurgerBuilder = () => (
  <div className={styles.root}>
    <DndProvider backend={HTML5Backend}>
      <BurgerIngredients/>
      <BurgerConstructor/>
    </DndProvider>
  </div>
)

export default BurgerBuilder
