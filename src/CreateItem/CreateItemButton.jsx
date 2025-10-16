import { useState } from "react";
import styles from './CreateItemButton.module.css'

export default function CreateItemButton({ onClick }) {
  return (
    <div id={styles.createItemButtonContainer}>
      <button onClick={onClick}>+ New Item</button>
    </div>
  );
}
