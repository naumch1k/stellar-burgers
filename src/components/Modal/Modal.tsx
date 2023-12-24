import { MouseEvent, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Modal.module.css'

interface IModalProps {
  isOpen: boolean;
  onClose: () => void | undefined;
  onBackdropClick:(e: MouseEvent) => void;
  children: ReactNode;
}

export const Modal = ({
  isOpen,
  onClose,
  onBackdropClick,
  children,
}: IModalProps) => {
  return createPortal(
    <div
      className={`${styles.root} ${isOpen ? `${styles.isOpen}` : ''}`}
      onClick={onBackdropClick}
    >
      <div className={`${styles.container} pt-25 pr-10 pb-25 pl-10`}>
        {children}
        <button
          className={styles.closeButton}
          type='button'
          aria-label='Close modal'
          onClick={onClose}
        >
          <CloseIcon type='primary'/>
        </button>
      </div>
    </div>,
    document.querySelector('.portal')!
  )
}
