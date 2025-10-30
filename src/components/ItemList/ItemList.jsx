import ItemCard from './ItemCard.jsx';
import styles from './ItemList.module.css';
import { useQuery } from "@tanstack/react-query";

const fetchItems = async () => {
  const response = await fetch('/api/item');
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  return response.json();
};

export default function ItemList() {
  const data = useQuery({
    queryKey: ['items'],
    queryFn: fetchItems,
  }).data;

  return (
    <div id={styles.itemList}>
      {data?.map((item) => (
        <ItemCard item={item} key={item.id} />
      ))}
    </div>
  );
}
