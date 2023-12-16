import { useState, MouseEvent } from 'react'
import { useAppDispatch } from 'store/store'
import { ingredientsCleared } from 'store/burgerConstructor/burgerConstructor.slice'
import { orderNumberCleared } from 'store/order/order.slice'

export const useModal = () => {
  const dispatch = useAppDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const closeByBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) setIsModalOpen(false)
  }

  const closeOrderConfirmationModal = () => {
    dispatch(orderNumberCleared())
    dispatch(ingredientsCleared())
    closeModal()
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
    closeByBackdropClick,
    closeOrderConfirmationModal,
  }
}
