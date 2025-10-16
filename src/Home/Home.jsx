import ItemList from "./ItemList.jsx";
import styles from './Home.module.css';

const ITEMS = [
  {id: 1, title: "Brand New Red Washington Nationals New Era Hat", price: "$15", imagePath: "./test_images/washington_nationals_hat.jpg"},
  {id: 2, title: "Used Late 2008 Apple Macbook Pro", price: "$450", imagePath: "./test_images/apple_macbook_pro.jpg"},
  {id: 3, title: "Used Chicago Bulls Jersey", price: "$75", imagePath: "./test_images/chicago_bulls_jersey.jpg"},
  {id: 4, title: "Used iPhone 15 Pro", price: "$400", imagePath: "./test_images/iphone_15.jpg"}
];

export default function Home() {
  return (
    <main id={styles.home}>
      <ItemList items={ITEMS} />
    </main>
  );
}
