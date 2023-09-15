import { useSelector } from 'react-redux'
import { selectIngredients } from '../store/ingredients/selectors'
import { selectOrderById } from '../store/orders/selectors'
import { IRootState } from '../store/store'
import { IIngredient } from '../shared/types/ingredient'

function useOrderDetails(orderId: string) {
  const ingredients = useSelector(selectIngredients)
  const order = useSelector((state: IRootState) => selectOrderById(state, orderId))

  const { number, createdAt, name, status } = order!

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

  const price = orderIngredients.reduce((price, currIngredient) => {
    return price + currIngredient.price
  }, 0)

  return {
    number,
    createdAt,
    name,
    status,
    price,
  }
}

export default useOrderDetails
