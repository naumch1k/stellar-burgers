import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Page } from '../page'
import { Header } from '../header'
import { BurgerIngredients } from '../burger-ingredients'
import { BurgerConstructor } from '../burger-constructor'
import { Loader } from '../loader'
import { OrderDetailsContext } from '../../contexts/order-details-context'
import store from '../../store/store'
import { fetchIngredients } from '../../store/ingredients/operations'
import { IRootState } from '../../store/store'

export const App = () => {
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
    <Page>
      <Page.Header>
        <Header/>
      </Page.Header>
      <Page.Content>
        <OrderDetailsContext.Provider value={{ orderDetails, setOrderDetails }}>
          <BurgerIngredients/>
          {/* <BurgerConstructor/> */}
        </OrderDetailsContext.Provider>
      </Page.Content>
    </Page>
  )
}
