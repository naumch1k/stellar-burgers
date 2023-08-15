import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BurgerIngredients } from '../../components/burger-ingredients'
import { BurgerConstructor } from '../../components/burger-constructor'
import styles from './main.module.css'

const Main = () => {
  return (
    <div className={styles.root}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients/>
        <BurgerConstructor/>
      </DndProvider>
    </div>
  )
}

export default Main