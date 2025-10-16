import CreateItemForm from './CreateItemForm';
import styles from './CreateItemModal.module.css'

export default function CreateItemModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <CreateItemForm onCancel={onClose} />
      </div>
    </div>
  )
}