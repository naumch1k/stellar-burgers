import {
  useEffect,
  useState,
  useCallback,
  MouseEvent,
} from 'react'
import { useAppDispatch } from 'store/store'
import { clearError } from 'store/order/order.slice'

export const useErrorModal = () => {
  const dispatch = useAppDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    dispatch(clearError())
    setIsModalOpen(false)
  }, [dispatch])

  const closeByBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) closeModal()
  }

  const closeByEsc = useCallback((e: Event) => {
    if (e instanceof KeyboardEvent && e.code === 'Escape') closeModal()
  }, [closeModal])

  useEffect(() => {
    if (isModalOpen) document.addEventListener('keydown', closeByEsc)

    return () => document.removeEventListener('keydown', closeByEsc)
  }, [closeByEsc, isModalOpen])

  return {
    isModalOpen,
    openModal,
    closeModal,
    closeByBackdropClick,
  }
}
