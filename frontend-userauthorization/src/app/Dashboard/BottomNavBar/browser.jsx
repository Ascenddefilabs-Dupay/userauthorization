'use client';

import { useRouter } from 'next/navigation';
import styles from './browser.module.css';

const Assets = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Assets</h1>
      <div className={styles.contentBox}>
        <p className={styles.text}> No Assets found</p>
      </div>
    </div>
  );
};

export default Assets;