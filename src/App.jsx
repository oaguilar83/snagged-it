import { useState } from 'react'
import Header from './Header/Header.jsx';
import Home from './Home/Home.jsx'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Home />
    </div>
  );
}

export default App
