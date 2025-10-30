import { useState } from 'react'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import styles from './App.module.css'
import CreateItemButton from './components/CreateItem/CreateItemButton.jsx';
import CreateItemModal from './components/CreateItem/CreateItemModal.jsx';
import ItemList from './components/ItemList/ItemList.jsx';

export default function App() {
  const [showCreateItemModal, setShowCreateItemModal] = useState(false);

  const handleOpenCreateItemModal = () => setShowCreateItemModal(true);
  const handleCloseCreateItemModal = () => setShowCreateItemModal(false);

  return (
    <div id={styles.app}>
      <Header />
      <CreateItemButton onClick={handleOpenCreateItemModal} />
      <CreateItemModal showModal={showCreateItemModal} onCloseModal={handleCloseCreateItemModal} />
      <ItemList />
      <Footer />
    </div>
  );
}
