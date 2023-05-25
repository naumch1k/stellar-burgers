import { Page } from '../Page'

import { Header } from '../Header'
import { BurgerIngredients } from '../BurgerIngredients';


export const App = () => {
  return (
    <Page>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Content>
        <BurgerIngredients />
      </Page.Content>
    </Page>
  )
}
