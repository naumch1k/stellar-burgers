import { MAIN_API } from '../constants/main-api'


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
