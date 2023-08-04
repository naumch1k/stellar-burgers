import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BurgerIngredients } from '../../components/burger-ingredients'
import { BurgerConstructor } from '../../components/burger-constructor'
import { Loader } from '../../components/loader'
import { OrderDetailsContext } from '../../contexts/order-details-context'
import store from '../../store/store'
import { fetchIngredients } from '../../store/ingredients/operations'
import { IRootState } from '../../store/store'
import styles from './main.module.css'

const Main = () => {
  const [orderDetails, setOrderDetails] = useState({})
  const loadingStatus = useSelector((state: IRootState) => state.ingredients.status)

  useEffect(() => {
    store.dispatch(fetchIngredients())
  }, [])

  if (loadingStatus === 'loading') {
    return (
      <Loader/>
    )
  }

  return (
    <div className={styles.root}>
      <OrderDetailsContext.Provider value={{ orderDetails, setOrderDetails }}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients/>
          <BurgerConstructor/>
        </DndProvider>
      </OrderDetailsContext.Provider>
    </div>
  )
}

export default Main
