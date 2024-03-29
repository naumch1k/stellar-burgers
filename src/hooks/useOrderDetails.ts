import { useSelector } from 'react-redux'
import { selectIngredients } from 'store/ingredients/ingredients.selectors'
import { selectOrderById } from 'store/orders/orders.selectors'
import { IRootState } from 'store/store'
import { IIngredient } from 'shared/types'
import { translateOrderName } from 'shared/helpers/translateOrderName'
import { IngredientsDictionary } from 'shared/constants/ingredientsDictionary'

function useOrderDetails(orderId: string) {
  const ingredients = useSelector(selectIngredients)
  const order = useSelector((state: IRootState) => selectOrderById(state, orderId))
  const { number, createdAt: date, name, status } = order!

  const getOrderIngredients = () => {
    const orderIngredients: IIngredient[] = []

    order?.ingredients.forEach(ingredientId => {
      ingredients.forEach(ingredient => {
        if (ingredientId === ingredient._id) orderIngredients.push(ingredient)
      })
    })

    return orderIngredients
  }

  const orderIngredients = getOrderIngredients()
  const uniqueIngredients  = Array.from(new Set(orderIngredients))

  const price = orderIngredients.reduce((price, currIngredient) => {
    return price + currIngredient.price
  }, 0)

  return {
    number,
    createdAt: new Date(date),
    name: translateOrderName(name, IngredientsDictionary),
    status,
    price,
    ingredients: orderIngredients,
    uniqueIngredients,
  }
}

export default useOrderDetails
