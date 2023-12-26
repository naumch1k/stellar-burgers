import { useState, MouseEvent } from 'react'
import { useAppDispatch } from 'store/store'
import { clearError } from 'store/order/order.slice'

export const useModal = () => {
  const dispatch = useAppDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const closeByBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) setIsModalOpen(false)
  }

  const closeOrderErrorModal = () => {
    dispatch(clearError())
    closeModal()
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
    closeByBackdropClick,
    closeOrderErrorModal,
  }
}
