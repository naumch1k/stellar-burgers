import axios from 'axios'
import { INGREDIENTS_API } from 'shared/constants/ingredientsApi'

const getIngredients = () => axios.get(`${INGREDIENTS_API}/ingredients`)

export const ingredientsApi = { getIngredients }
