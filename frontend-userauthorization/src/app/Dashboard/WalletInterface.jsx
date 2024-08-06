'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faExchangeAlt, faSyncAlt, faPaperPlane, faDownload, faWallet, faListAlt, faCog, faCopy, faBell, faExpand,faQrcode } from '@fortawesome/free-solid-svg-icons';
import styles from './WalletInterface.module.css';
import { FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { GoCheck } from "react-icons/go";

const Home = () => {
  const [activeTab, setActiveTab] = useState('Crypto');
  const [activeAction, setActiveAction] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleIconClick = (iconName) => {
    console.log(`${iconName} button clicked`);
    switch (iconName) {
      case 'Buy':
      case 'Swap':
      case 'Bridge':
      case 'Send':
        router.push('/Dashboard/addcrypto_btn');
        break;
      case 'Receive':
        router.push('Dashboard/receive_btn');
        break;
      case 'Copy to Clipboard':
        // Handle copy to clipboard logic here
        break;
      case 'Settings':
        // Handle settings logic here
        break;
      case 'Notification':
        // Handle notification logic here
        break;
      case 'Enlarge':
        // Handle enlarge logic here
        break;
      default:
        break;
    }
  };

  const handleAddCryptoClick = () => {
    handleIconClick('Add crypto');
    router.push('/Dashboard/addcrypto_btn'); // Ensure the correct path here
  };

  const handleManageWallets = () => {
    router.push('/Dashboard/addmanagewallets_btn'); // Adjust the route as needed
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.leftSection} onClick={toggleDropdown}>
          {/* <div className={styles.walletAddress}>Address 1 </div> */}
          <div className={styles.walletAddress} onClick={toggleDropdown}>
              <FaUserCircle />
              srinivass...cb.id
              <FaChevronDown className={styles.dropdownIcon} />
          </div>
        </div>
        <div className={styles.rightSection}>
          {/* <FontAwesomeIcon icon={faCopy} onClick={() => handleIconClick('Copy to Clipboard')} />
          <FontAwesomeIcon icon={faCog} onClick={() => handleIconClick('Settings')} />
          <FontAwesomeIcon icon={faBell} onClick={() => handleIconClick('Notification')} />
          <FontAwesomeIcon icon={faQrcode} onClick={() => handleIconClick('Scanner')} /> */}
          
        </div>
      </div>
      <div className={styles.balance}>$0.00</div>
      <div className={styles.actions}>
        {['Buy', 'Swap', 'Bridge', 'Send', 'Receive'].map(action => (
          <button 
            key={action}
            className={`${styles.actionButton} ${activeAction === action ? styles.activeAction : ''}`}
            onClick={() => {
              setActiveAction(action);
              handleIconClick(action);
            }}
          >
            <FontAwesomeIcon icon={getIcon(action)} />
            <span>{action}</span>
          </button>
        ))}
      </div>
      <hr />
      <div className={styles.banner}>
        {/* <div className={styles.bannerText}>
          <p>Onchain Summer is here 🌞</p>
          <p>Complete onchain experiences on Base, earn points, and redeem prizes.</p>
        </div>
        <button className={styles.closeButton}><FontAwesomeIcon icon={faTimes} /></button> */}
      </div>
      <div className={styles.tabs}>
        {['Crypto', 'NFTs', 'DeFi'].map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {activeTab === 'Crypto' && (
          <div className={styles.cryptoContent}>
            <div className={styles.cryptoIcons}>
              <img src="/crypto.png" alt="Crypto Icon 1" className={styles.cryptoIcon} />
            </div>
            <div className={'button-container'}>
               <h2 className={styles.addNameStart}>Add crypto to get started </h2>
            <button className={styles.addCryptoButton} onClick={handleAddCryptoClick}>
              Add crypto
            </button>
            </div>
          </div>
        )}
        {activeTab === 'NFTs' && <div>NFTs Content</div>}
        {activeTab === 'DeFi' && <div>DeFi Content</div>}
      </div>
      {/* <div className={styles.footer}>
        {['Assets', 'Transactions', 'Settings'].map(tab => (
          <button
            key={tab}
            className={`${styles.footerButton} ${activeTab === tab ? styles.activeFooter : ''}`}
            onClick={() => {
              setActiveTab(tab);
              handleIconClick(tab);
            }}
          >
            <FontAwesomeIcon icon={getIcon(tab)} />
            <span>{tab}</span>
          </button>
        ))}
      </div> */}
      {dropdownVisible && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownContent}>

          <div style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '10px' }}>
              Wallets
              <hr style={{ color: 'gray'}} /> {/* Add vertical space around the <hr /> */}
              <h4 style={{ color: 'gray', fontSize: '14px', fontWeight: 'bold',  textAlign: 'left', marginBottom: '15px' }}>
                  Wallet 1
              </h4>
          </div>
            <div className={styles.dropdownItem}>
            <FaUserCircle className={styles.profileIcon} />
            <div className={styles.textContainer}>
              <div className={styles.userid}>srinivass...cb.id</div>
              <div> <span>$0.00</span>
              <div className={styles.icons}>
              <GoCheck className={styles.checkIcon} />
              </div>
            </div>
              
              <button className={styles.viewprofileButton} onClick={handleManageWallets}> 
                <span className={styles.text}>View your profile</span>
              </button>
            </div>
            </div>
            <button className={styles.manageWalletsButton} onClick={handleManageWallets}>
                <span className={styles.text}>Add & manage wallets</span>
                <FontAwesomeIcon icon={faCog} className={styles.settingsIcon} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const getIcon = (action) => {
  switch (action) {
    case 'Buy':
      return faPlus;
    case 'Swap':
      return faExchangeAlt;
    case 'Bridge':
      return faSyncAlt;
    case 'Send':
      return faPaperPlane;
    case 'Receive':
      return faDownload;
    case 'Assets':
      return faWallet;
    case 'Transactions':
      return faListAlt;
    case 'Settings':
      return faCog;
    default:
      return null;
  }
};

export default Home;

