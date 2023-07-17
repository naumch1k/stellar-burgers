import { useState, useEffect } from 'react'
import { Page } from '../page'
import { Header } from '../header'
import { BurgerIngredients } from '../burger-ingredients'
import { BurgerConstructor } from '../burger-constructor'
import { getIngredients } from '../../shared/utils/main-api'


export const App = () => {
  const [ingredientsData, setIngredientsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getIngredients()
      .then(data => {
        setIngredientsData(data)
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
        <>
          <BurgerIngredients
            ingredients={ingredientsData}
          />
          <BurgerConstructor
            ingredients={ingredientsData}
          />
        </>
      }
      </Page.Content>
    </Page>
  )
}
