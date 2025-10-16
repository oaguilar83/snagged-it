import { useState } from 'react'
import Header from './Header/Header.jsx';
import Home from './Home/Home.jsx'
import Footer from './Footer/Footer.jsx'
import styles from './App.module.css'
import CreateItemButton from './CreateItem/CreateItemButton.jsx';
import CreateItemModal from './CreateItem/CreateItemModal.jsx';

export default function App() {
  const [showCreateItemModal, setShowCreateItemModal] = useState(false);

  const handleOpenCreateItemModal = () => setShowCreateItemModal(true);
  const handleCloseCreateItemModal = () => setShowCreateItemModal(false);

  return (
    <div id={styles.app}>
      <Header />
      <CreateItemButton onClick={handleOpenCreateItemModal} />
      <CreateItemModal showModal={showCreateItemModal} onCloseModal={handleCloseCreateItemModal}/>
      <Home />
      <Footer />
    </div>
  );
}
