import { useState, useEffect } from 'react'
import { Page } from '../page'
import { Header } from '../header'
import { BurgerIngredients } from '../burger-ingredients'
import { BurgerConstructor } from '../burger-constructor'
import { IngredientsContext } from '../../contexts/ingredients-context'
import { getIngredients } from '../../shared/utils/main-api'


export const App = () => {
  const [ingredients, setIngredients] = useState([])
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
          <BurgerIngredients/>
          <BurgerConstructor/>
        </IngredientsContext.Provider>
      }
      </Page.Content>
    </Page>
  )
}
