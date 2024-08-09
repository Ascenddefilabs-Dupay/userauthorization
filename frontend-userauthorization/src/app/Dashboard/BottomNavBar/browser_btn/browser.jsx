'use client';

import { useRouter } from 'next/navigation';
import styles from './browser.module.css';

const Browser = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Browser</h1>
      <div className={styles.contentBox}>
        <p className={styles.text}> No Broswer found</p>
      </div>
    </div>
  );
};

export default Browser;
