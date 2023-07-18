import { MAIN_API } from '../constants/main-api'
import { IIngredient } from '../types/ingredient'


const handleResponse = async (response: Response) => {
  const payload = await response.json();

  if (!response.ok) {
    throw new Error(`The request failed with HTTP status: ${response.status}`)
  }

  return payload
}

export const getIngredients = async () => {
  try {
    const response = await fetch(`${MAIN_API}/ingredients`)
    return handleResponse(response)
  } catch (error) {
    throw new Error(`Failed to fetch ingredients: ${error}`)
  }
}

export const placeOrder = async (ingredients: IIngredient[]) => {
  try {
    const response = await fetch(`${MAIN_API}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredients,
      })
    })
    const res = await response.json()

    return res
  } catch  (error) {
    console.log(error)
  }
}
