import { MouseEvent } from 'react'
import { Modal } from 'components/Modal'
import { OrderConfirmation } from 'components/OrderConfirmation'

interface IOrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void | undefined;
  onBackdropClick:(e: MouseEvent) => void;
}

export const OrderConfirmationModal = ({
  isOpen,
  onClose,
  onBackdropClick,
}: IOrderConfirmationModalProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    onBackdropClick={onBackdropClick}
  >
    <OrderConfirmation/>
  </Modal>
)
