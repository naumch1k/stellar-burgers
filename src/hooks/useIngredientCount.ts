import { IIngredient } from 'shared/types'

function useIngredientCount({
  ingredients,
  ingredientId,
}: {
  ingredients:(IIngredient | undefined)[];
  ingredientId: string;
}) {
  const ingredientCount = ingredients.reduce((count, ingredient) => {
    if (ingredient?._id === ingredientId) return count + 1
    return count
  }, 0)

  return ingredientCount
}

export default useIngredientCount
