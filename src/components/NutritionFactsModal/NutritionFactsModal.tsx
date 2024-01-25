import { Modal } from 'components/Modal'
import { NutritionFacts } from 'components/NutritionFacts'
import { useNutritionFactsModal } from './hooks/useNutritionFactsModal'

export const NutritionFactsModal = () => {
  const {
    isModalOpen,
    previewedIngredientId,
    closeModal,
    closeByBackdropClick,
  } = useNutritionFactsModal()

  if (!previewedIngredientId) return null

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      onBackdropClick={closeByBackdropClick}
    >
      <NutritionFacts ingredientId={previewedIngredientId}/>
    </Modal>
  )
}
