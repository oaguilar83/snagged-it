import ItemCard from './ItemCard.jsx';
import styles from './ItemList.module.css'
import { useQuery } from '@tanstack/react-query';


export default function ItemList() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['item'],
    queryFn: async () => {
      const response = await fetch('/api/item');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  })

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div id={styles.itemList}>
      {data.map((item) => (
        <ItemCard item={item} key={item.id} />
      ))}
    </div>
  );
}
