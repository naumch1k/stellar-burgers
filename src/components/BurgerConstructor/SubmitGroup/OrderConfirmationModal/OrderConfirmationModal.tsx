import { Modal } from 'components/Modal'
import { OrderConfirmation } from './OrderConfirmation'
import { useOrderConfirmationModal } from './useOrderConfirmationModal'

export const OrderConfirmationModal = () => {
  const {
    isModalOpen,
    closeModal,
    closeByBackdropClick,
    orderNumber,
  } = useOrderConfirmationModal()

  if (!orderNumber) return null

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      onBackdropClick={closeByBackdropClick}
    >
      <OrderConfirmation orderNumber={orderNumber}/>
    </Modal>
  )
}
