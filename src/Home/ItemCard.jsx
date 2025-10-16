import styles from './ItemCard.module.css'

export default function ItemCard({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.itemTitleContainer}>
        <div className={styles.itemTitle}>{item.title}</div>
      </div>
      <div className={styles.itemPrice}>{item.price}</div>
      <img height="150px" src={item.imagePath} alt={item.title} />
    </div>
  );
}
