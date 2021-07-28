import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/home.module.css';
function Home() {
  return (
    <>
      <div className={styles.container}>
        <Link to='/schedule-interview' className={styles.schedule}>
          Schedule Interview
        </Link>
        <Link to='/list-interview' className={styles.schedule}>
          List Interview
        </Link>
      </div>
    </>
  );
}

export default Home;
