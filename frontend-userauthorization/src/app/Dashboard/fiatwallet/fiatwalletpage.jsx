// "use client";
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import styles from './fiatwallet.module.css'; // Separate CSS file

// const FiatWallet = () => {
//   const router = useRouter();

//   const navigateToDashboard = () => {
//     router.push('/Dashboard');
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <button onClick={navigateToDashboard} className={styles.backButton}>
//           <ArrowBackIcon />
//         </button>
//         <h1 className={styles.title}>Fiat Wallet</h1>
//       </div>
//       <div className={styles.buttonContainer}>
//         <button className={styles.walletButton}>Add Bank</button>
//         <button className={styles.walletButton}>Deposit</button>
//         <button className={styles.walletButton}>Withdraw</button>
//         <button className={styles.walletButton}>Send</button>
//         <button className={styles.walletButton}>Top-up</button>
//       </div>
//     </div>
//   );
// };

// export default FiatWallet;




"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './fiatwallet.module.css'; // Separate CSS file

const FiatWallet = () => {
  const router = useRouter();

  const navigateToDashboard = () => {
    router.push('/Dashboard');
  };

  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} button clicked`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={navigateToDashboard} className={styles.backButton}>
          <ArrowBackIcon />
        </button>
        <h1 className={styles.title}>Fiat Wallet</h1>
      </div>
      <div className={styles.buttonContainer}>
        <button 
          className={styles.walletButton} 
          onClick={() => handleButtonClick('Add Bank')}
        >
          Add Bank
        </button>
        <button 
          className={styles.walletButton} 
          onClick={() => handleButtonClick('Deposit')}
        >
          Deposit
        </button>
        <button 
          className={styles.walletButton} 
          onClick={() => handleButtonClick('Withdraw')}
        >
          Withdraw
        </button>
        <button 
          className={styles.walletButton} 
          onClick={() => handleButtonClick('Send')}
        >
          Send
        </button>
        <button 
          className={styles.walletButton} 
          onClick={() => handleButtonClick('Top-up')}
        >
          Top-up
        </button>
      </div>
    </div>
  );
};

export default FiatWallet;
