import styles from './Header.module.css'

export default function Header() {
  return (
    <header id={styles.header}>
      <div className={styles.textContainer}>
        <h1 className={styles.headerTitle}>Snagged It!</h1>
        <h2 className={styles.headerSubText}>Welcome to the marketplace with the best deals!</h2>
      </div>
    </header>
  );
}
