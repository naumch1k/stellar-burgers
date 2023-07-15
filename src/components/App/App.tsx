import { useState, useEffect } from 'react'
import { Page } from '../Page'
import { Header } from '../Header'
import { BurgerIngredients } from '../BurgerIngredients'
import { BurgerConstructor } from '../BurgerConstructor'
import { MAIN_API } from '../../shared/constants/main-api'


export const App = () => {
  const [ingredientsData, setIngredientsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const response = await fetch(MAIN_API)
        const data = await response.json()
        setIngredientsData(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    getIngredients()
  }, [])

  return (
    <Page>
      <Page.Header>
        <Header />
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
