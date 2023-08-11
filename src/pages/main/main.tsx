import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BurgerIngredients } from '../../components/burger-ingredients'
import { BurgerConstructor } from '../../components/burger-constructor'
import { OrderDetailsContext } from '../../contexts/order-details-context'
import styles from './main.module.css'

const Main = () => {
  const [orderDetails, setOrderDetails] = useState({})


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
