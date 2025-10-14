import ProductCard from './ProductCard.jsx';
import styles from './ProductList.module.css'

export default function ProductList({ products }) {
  const productList = products.map(product =>
    <ProductCard product={product} />
  );
  return (
    <div className={styles.productList}>
      {productList}
    </div>
  );
}
