import ItemCard from './ItemCard.jsx';
import styles from './ItemList.module.css'

export default function ItemList({ items }) {
  const itemList = items.map(item =>
    <ItemCard item={item} key={item.id} />
  );
  return (
    <div className={styles.itemList}>
      {itemList}
    </div>
  );
}
