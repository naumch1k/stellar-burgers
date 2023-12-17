import { MouseEvent } from 'react'
import { Modal } from 'components/Modal'
import { NutritionFacts } from 'components/NutritionFacts/NutritionFacts'

interface INutritionFactsModalProps {
  isOpen: boolean;
  onClose: () => void | undefined;
  onBackdropClick:(e: MouseEvent) => void;
  ingredientId: string;
}

export const NutritionFactsModal = ({
  isOpen,
  onClose,
  onBackdropClick,
  ingredientId,
}: INutritionFactsModalProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    onBackdropClick={onBackdropClick}
  >
    <NutritionFacts ingredientId={ingredientId}/>
  </Modal>
)
