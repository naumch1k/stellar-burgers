import { ReactNode } from 'react'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Modal.module.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void | undefined;
  children: ReactNode;
}

export const Modal = (props: ModalProps) => {
  const {
    isOpen,
    onClose,
    children,
  } = props

  return (
    <div className={`${styles.root} ${isOpen ? `${styles.isOpen}` : ''}`}>
      <div className={styles.container}>
        {children}
        <button
          className={styles.closeButton}
          type='button'
          aria-label='Close modal'
          onClick={onClose}
        >
          <CloseIcon type="primary"/>
        </button>
      </div>
    </div>
  )
}
