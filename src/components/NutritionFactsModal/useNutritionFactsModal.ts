import {
  useEffect,
  useState,
  useCallback,
  MouseEvent,
} from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'store/store'
import { selectPreviewedIngredientId } from 'store/ingredients/ingredients.selectors'
import { clearPreviewedIngredientId } from 'store/ingredients/ingredients.slice'

export const useNutritionFactsModal = () => {
  const dispatch = useAppDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const previewedIngredientId = useSelector(selectPreviewedIngredientId)

  const openModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    dispatch(clearPreviewedIngredientId())
    setIsModalOpen(false)
  }, [dispatch])

  const closeByBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) closeModal()
  }

  const closeByEsc = useCallback((e: Event) => {
    if (e instanceof KeyboardEvent && e.code === 'Escape') closeModal()
  }, [closeModal])

  useEffect(() => {
    if (previewedIngredientId) openModal()
  }, [previewedIngredientId, openModal])

  useEffect(() => {
    if (isModalOpen) document.addEventListener('keydown', closeByEsc)

    return () => document.removeEventListener('keydown', closeByEsc)
  }, [closeByEsc, isModalOpen])

  return {
    isModalOpen,
    previewedIngredientId,
    openModal,
    closeModal,
    closeByBackdropClick,
  }
}
