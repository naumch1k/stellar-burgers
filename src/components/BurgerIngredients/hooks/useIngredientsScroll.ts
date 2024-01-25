import { useState, createRef, useRef } from 'react'
import { IngredientGroups } from 'shared/constants/ingredientGroups'
import { IIngredientGroup, IngredientGroupRef } from 'shared/types'

function useIngredientsScroll() {
  const [currentTab, setCurrentTab] = useState<string>(IngredientGroups[0].type)
  const ingredientsRef = useRef<HTMLUListElement>(null)
  const ingredientGroupRefs: Record<string, IngredientGroupRef> = {}

  IngredientGroups.forEach((group: IIngredientGroup) =>
    ingredientGroupRefs[group.type] = createRef<HTMLHeadingElement>()
  )

  const scrollToRef = (ref: IngredientGroupRef) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleTabClick = (ingredientGroupType: string) => {
    const selectedGroup = IngredientGroups.find(group => group.type === ingredientGroupType)

    if (selectedGroup) {
      const { type } = selectedGroup
      scrollToRef(ingredientGroupRefs[type])
    }
	}

  const handleIngredientsScroll = () => {
    const lineY = ingredientsRef.current?.getBoundingClientRect().y

    // Calculate offsets for each ingredient group dynamically
    const offsets = IngredientGroups.map(group =>
      Math.abs(ingredientGroupRefs[group.type]!.current!.getBoundingClientRect().y - (lineY as number))
    )

    // Find the minimum offset and set the corresponding tab as current
    const minOffsetIndex = offsets.indexOf(Math.min(...offsets))
    setCurrentTab(IngredientGroups[minOffsetIndex].type)
  }

  return {
    currentTab,
    handleTabClick,
    handleIngredientsScroll,
    ingredientsRef,
    ingredientGroupRefs,
  }
}

export default useIngredientsScroll
