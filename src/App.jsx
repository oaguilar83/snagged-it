import { useState } from 'react'
import Header from './Header/Header.jsx';
import Home from './Home/Home.jsx'
import Footer from './Footer/Footer.jsx'
import styles from './App.module.css'
import CreateItemButton from './CreateItem/CreateItemButton.jsx';
import CreateItemModal from './CreateItem/CreateItemModal.jsx';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className={styles.app}>
      <Header />
      <CreateItemButton onClick={handleOpenModal} />
      <CreateItemModal show={showModal} onClose={handleCloseModal} />
      <Home />
      <Footer />
    </div>
  );
}
