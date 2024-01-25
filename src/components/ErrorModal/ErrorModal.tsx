import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Modal } from 'components/Modal'
import { ErrorMessage } from 'components/ErrorMessage'
import { useErrorModal } from './hooks/useErrorModal'
import styles from './ErrorModal.module.css'

interface IErrorModalProps {
  isOpen: boolean;
  errorText: string;
}

export const ErrorModal = ({
  isOpen,
  errorText,
}: IErrorModalProps) => {
  const {
    closeModal,
    closeByBackdropClick,
  } = useErrorModal()

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      onBackdropClick={closeByBackdropClick}
    >
      <div className={styles.content}>
        <div className={styles.errorSign}>
          <CloseIcon type='primary'/>
        </div>
        <ErrorMessage>{errorText}</ErrorMessage>
      </div>
    </Modal>
  )
}
