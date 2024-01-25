import {
  useEffect,
  useState,
  useCallback,
  MouseEvent,
} from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'store/store'
import { selectOrderNumber } from 'store/order/order.selectors'
import { clearIngredients } from 'store/burgerConstructor/burgerConstructor.slice'
import { clearOrderNumber } from 'store/order/order.slice'

export const useOrderConfirmationModal = () => {
  const dispatch = useAppDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const orderNumber = useSelector(selectOrderNumber)

  const openModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    dispatch(clearOrderNumber())
    dispatch(clearIngredients())
    setIsModalOpen(false)
  }, [dispatch])

  const closeByBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) closeModal()
  }

  const closeByEsc = useCallback((e: Event) => {
    if (e instanceof KeyboardEvent && e.code === 'Escape') closeModal()
  }, [closeModal])

  useEffect(() => {
    if (orderNumber) openModal()
  }, [orderNumber, openModal])

  useEffect(() => {
    if (isModalOpen) document.addEventListener('keydown', closeByEsc)

    return () => document.removeEventListener('keydown', closeByEsc)
  }, [closeByEsc, isModalOpen])

  return {
    isModalOpen,
    orderNumber,
    openModal,
    closeModal,
    closeByBackdropClick,
  }
}
