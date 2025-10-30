import styles from './GenericModal.module.css'

export default function GenericModal({ showModal, onCloseModal, children }) {
  if (!showModal) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onCloseModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
