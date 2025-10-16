import { useState } from "react";
import styles from './CreateItemButton.module.css'

export default function CreateButton({ onClick }) {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.createItemButton} onClick={onClick}>+ New Item</button>
    </div>
  );
}
