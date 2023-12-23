import { MouseEvent } from 'react'
import { Modal } from 'components/Modal'
import { ErrorMessage } from 'components/ErrorMessage'

interface IOrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void | undefined;
  onBackdropClick:(e: MouseEvent) => void;
  errorText: string;
}

export const ErrorModal = ({
  isOpen,
  onClose,
  onBackdropClick,
  errorText,
}: IOrderConfirmationModalProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    onBackdropClick={onBackdropClick}
  >
    <ErrorMessage>{errorText}</ErrorMessage>
  </Modal>
)
