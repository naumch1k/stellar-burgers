import { useState, useEffect } from 'react'
import { Page } from '../page'
import { Header } from '../header'
import { BurgerIngredients } from '../burger-ingredients'
import { BurgerConstructor } from '../burger-constructor'
import { IngredientsContext } from '../../contexts/ingredients-context'
import { OrderDetailsContext } from '../../contexts/order-details-context'
import { getIngredients } from '../../shared/utils/main-api'


export const App = () => {
  const [ingredients, setIngredients] = useState([])
  const [orderDetails, setOrderDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getIngredients()
      .then(data => {
        setIngredients(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <Page>
      <Page.Header>
        <Header/>
      </Page.Header>
      <Page.Content>
      {!isLoading &&
        <IngredientsContext.Provider value={{ ingredients, setIngredients }}>
          <OrderDetailsContext.Provider value={{ orderDetails, setOrderDetails }}>
            <BurgerIngredients/>
            <BurgerConstructor/>
          </OrderDetailsContext.Provider>
        </IngredientsContext.Provider>
      }
      </Page.Content>
    </Page>
  )
}
