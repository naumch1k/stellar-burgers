import { capitalizeFirstLetter } from "./capitalize-first-letter"

export const translateOrderName = (
  orderName: string,
  dictionary: Record<string, string>
): string => {
  const ingredients = orderName.split(' ')
  const translatedIngredients: string[] = []

  ingredients.forEach(ingredient => {
    const lowercaseIngredient = ingredient.toLowerCase()

    if (dictionary[lowercaseIngredient]) {
      const translatedIngredient = dictionary[lowercaseIngredient]

      translatedIngredients.push(capitalizeFirstLetter(translatedIngredient))
    } else {
      translatedIngredients.push(capitalizeFirstLetter(ingredient))
    }
  })

  const translatedOrderName = translatedIngredients.join(' ')

  return translatedOrderName
}
