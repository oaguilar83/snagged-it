import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>Snagged It!</div>
      <div className={styles.description}>Welcome to the marketplace with the best deals!</div>
    </div>
  );
}
