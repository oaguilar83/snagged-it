import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <figcaption>
        <div className={styles.productTitle}>{product.title}</div>
        <div className={styles.productPrice}>{product.price}</div>
      </figcaption>
      <img height="150px" src={product.imagePath} alt={product.title} />
    </div>
  );
}
