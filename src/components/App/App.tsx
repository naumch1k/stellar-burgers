import { Page } from '../Page'
import { Header } from '../Header'
import { BurgerIngredients } from '../BurgerIngredients';

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
      </Page.Content>
    </Page>
  )
}
