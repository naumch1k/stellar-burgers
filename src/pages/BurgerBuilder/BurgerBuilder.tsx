import { useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Loader } from 'components/Loader'
import { BurgerIngredients } from 'components/BurgerIngredients'
import { BurgerConstructor } from 'components/BurgerConstructor'
import { selectAuthState } from 'store/auth/auth.selectors'
import styles from './BurgerBuilder.module.css'

const BurgerBuilder = () => {
  const { isCheckingUserAccess, isUpdatingToken } = useSelector(selectAuthState)

  return (
    isCheckingUserAccess || isUpdatingToken
    ? <Loader/>
    : <div className={styles.root}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients/>
          <BurgerConstructor/>
        </DndProvider>
      </div>
  )
}

export default BurgerBuilder
