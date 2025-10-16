import styles from './CreateItemForm.module.css'

export default function CreateItemForm({ onCancel }) {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>Create New Item</div>
      <form className={styles.createItemForm}>
        <div className={styles.inputSection}>
          <div className={styles.titleTitle}>Title:</div>
          <input type="text" placeholder="Title" />
        </div>
        <div className={styles.inputSection}>
          <div className={styles.descriptionTitle}>Description:</div>
          <textarea rows="10" placeholder="Description"></textarea>
        </div>
        <div className={styles.inputSection}>
          <div className={styles.priceTitle}>Price:</div>
          <input type="text" placeholder="Price" />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.formButton} type="button" onClick={onCancel}>Cancel</button>
          <button className={styles.formButton} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
