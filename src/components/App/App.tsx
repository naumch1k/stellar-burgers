import { Page } from '../Page'
import { Header } from '../Header'
import { BurgerIngredients } from '../BurgerIngredients'
import { BurgerConstructor } from '../BurgerConstructor'

import ingredientsData from '../../mocks/ingredients-data.json'


export const App = () => {
  return (
    <Page>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Content>
        <BurgerIngredients
          data={ingredientsData}
        />
        <BurgerConstructor
          data={ingredientsData}
        />
      </Page.Content>
    </Page>
  )
}
