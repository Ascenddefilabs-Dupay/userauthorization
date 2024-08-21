// "use client"
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { RiBankLine } from "react-icons/ri";
// import { PiHandDepositBold } from "react-icons/pi";
// import { PiHandWithdrawBold } from "react-icons/pi";
// import { IoMdSend } from "react-icons/io";
// import { IoMdWallet } from "react-icons/io";
// import styles from './fiatwallet.module.css'; // Separate CSS file

// const FiatWallet = () => {
//   const router = useRouter();

//   const navigateToDashboard = () => {
//     router.push('/Dashboard');
//   };

//   const handleButtonClick = (buttonName) => {
//     console.log(`${buttonName} button clicked`);
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
//         <button 
//           className={styles.walletButton} 
//           onClick={() => handleButtonClick('Add Bank')}
//         >
//           <div className={styles.buttonContent}>
//             <span>Add Bank</span>
//             <RiBankLine className={styles.icon} style={{ fontSize: '24px' }} />
//           </div>
//         </button>
//         <button 
//           className={styles.walletButton} 
//           onClick={() => handleButtonClick('Deposit')}
//         >
//           <div className={styles.buttonContent}>
//             <span>Deposit</span>
//             <PiHandDepositBold className={styles.icon} style={{ fontSize: '22px' }} />
//           </div>
//         </button>
//         <button 
//           className={styles.walletButton} 
//           onClick={() => handleButtonClick('Withdraw')}
//         >
//           <div className={styles.buttonContent}>
//             <span>Withdraw</span>
//             <PiHandWithdrawBold className={styles.icon} style={{ fontSize: '22px' }} />
//           </div>
//         </button>
//         <button 
//           className={styles.walletButton} 
//           onClick={() => handleButtonClick('Send')}
//         >
//           <div className={styles.buttonContent}>
//             <span>Send</span>
//             <IoMdSend className={styles.icon} style={{ fontSize: '22px' }} />
//           </div>
//         </button>
//         <button 
//           className={styles.walletButton} 
//           onClick={() => handleButtonClick('Top-up')}
//         >
//           <div className={styles.buttonContent}>
//             <span>Top-up</span>
//             <IoMdWallet className={styles.icon} style={{ fontSize: '22px' }} />
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FiatWallet;





"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { RiBankLine } from "react-icons/ri";
import { PiHandDepositBold } from "react-icons/pi";
import { PiHandWithdrawBold } from "react-icons/pi";
import { IoMdSend } from "react-icons/io";
import { IoMdWallet } from "react-icons/io";
import styles from './fiatwallet.module.css'; // Separate CSS file

const FiatWallet = () => {
  const router = useRouter();

  const handleButtonClick = (buttonName) => {
    switch (buttonName) {
      case 'Add Bank':
        router.push('/Crypto_Wallet/Dashboard/fiatwallet/addbank_btn');
        break;
      case 'Deposit':
        router.push('/Crypto_Wallet/Dashboard/fiatwallet/deposit_btn');
        break;
      case 'Withdraw':
        router.push('/Crypto_Wallet/Dashboard/fiatwallet/withdraw_btn');
        break;
      case 'Send':
        router.push('/Crypto_Wallet/Dashboard/fiatwallet/send_btn');
        break;
      case 'Top-up':
        router.push('/Crypto_Wallet/Dashboard/fiatwallet/top-up_btn');
        break;
      default:
        console.log('No route defined for this button');
    }
  };

  const navigateToDashboard = () => {
    router.push('/Crypto_Wallet/Dashboard');
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
          <div className={styles.buttonContent}>
            <span>Add Bank</span>
            <RiBankLine className={styles.icon} style={{ fontSize: '24px' }} />
          </div>
        </button>
        <button 
          className={styles.walletButton} 
          onClick={() => handleButtonClick('Deposit')}
        >
          <div className={styles.buttonContent}>
            <span>Deposit</span>
            <PiHandDepositBold className={styles.icon} style={{ fontSize: '22px' }} />
          </div>
        </button>
        <button 
          className={styles.walletButton} 
          onClick={() => handleButtonClick('Withdraw')}
        >
          <div className={styles.buttonContent}>
            <span>Withdraw</span>
            <PiHandWithdrawBold className={styles.icon} style={{ fontSize: '22px' }} />
          </div>
        </button>
        <button 
          className={styles.walletButton} 
          onClick={() => handleButtonClick('Send')}
        >
          <div className={styles.buttonContent}>
            <span>Send</span>
            <IoMdSend className={styles.icon} style={{ fontSize: '22px' }} />
          </div>
        </button>
        <button 
          className={styles.walletButton} 
          onClick={() => handleButtonClick('Top-up')}
        >
          <div className={styles.buttonContent}>
            <span>Top-up</span>
            <IoMdWallet className={styles.icon} style={{ fontSize: '22px' }} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FiatWallet;
