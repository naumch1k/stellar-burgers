import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectBun, selectFillings } from 'store/burgerConstructor/burgerConstructor.selectors'
import { IIngredient } from 'shared/types'

function useOrderPriceCalculator() {
  const bun = useSelector(selectBun)
  const fillings = useSelector(selectFillings)

  const bunsPrice = useMemo(() => bun ? bun.price : 0, [bun])
  const fillingsPrice = useMemo(() => fillings.reduce((prev: number, filling: IIngredient) => prev + filling.price, 0), [fillings])
  const orderPrice = bunsPrice + fillingsPrice

  return { orderPrice }
}

export default useOrderPriceCalculator
