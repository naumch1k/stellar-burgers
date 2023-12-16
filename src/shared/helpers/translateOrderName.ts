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

      translatedIngredients.push(translatedIngredient)
    } else {
      translatedIngredients.push(ingredient)
    }
  })

  const translatedOrderName = translatedIngredients.join(' ')

  return translatedOrderName
}
