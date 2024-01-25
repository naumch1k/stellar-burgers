import { useState, useRef } from 'react'
import { IngredientGroups } from 'shared/constants/ingredientGroups'

const { BUNS, BURGERS, TOPPINGS } = IngredientGroups

function useIngredientsScroll() {
  const [currentTab, setCurrentTab] = useState(IngredientGroups.BUNS)
  const ingredientsRef = useRef<HTMLUListElement>(null)
  const bunsIngredientGroupRef = useRef<HTMLHeadingElement>(null)
  const burgersIngredientGroupRef = useRef<HTMLHeadingElement>(null)
  const toppingsIngredientGroupRef = useRef<HTMLHeadingElement>(null)

  const scrollToRef = (ref: React.RefObject<HTMLHeadingElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleTabClick = (ingredientGroup: string) => {
		switch (ingredientGroup) {
			case BUNS: {
        scrollToRef(bunsIngredientGroupRef)
				break
			}
			case BURGERS: {
        scrollToRef(burgersIngredientGroupRef)
				break
			}
			case TOPPINGS: {
        scrollToRef(toppingsIngredientGroupRef)
				break
			}
		}
	}

  const handleIngredientsScroll = () => {
    const lineY = ingredientsRef.current?.getBoundingClientRect().y
    const bunsOffset = Math.abs(bunsIngredientGroupRef.current!.getBoundingClientRect().y - (lineY as number))
    const burgersOffset = Math.abs(burgersIngredientGroupRef.current!.getBoundingClientRect().y - (lineY as number))
		const toppingsOffset = Math.abs(toppingsIngredientGroupRef.current!.getBoundingClientRect().y - (lineY as number))

    if (bunsOffset < burgersOffset && bunsOffset < toppingsOffset)
      setCurrentTab(BUNS)
		if (burgersOffset < bunsOffset && burgersOffset < toppingsOffset)
      setCurrentTab(BURGERS)
    if (toppingsOffset < bunsOffset && toppingsOffset < burgersOffset)
      setCurrentTab(TOPPINGS)
  }

  return {
    currentTab,
    handleTabClick,
    handleIngredientsScroll,
    ingredientsRef,
    bunsIngredientGroupRef,
    burgersIngredientGroupRef,
    toppingsIngredientGroupRef,
  }
}

export default useIngredientsScroll
