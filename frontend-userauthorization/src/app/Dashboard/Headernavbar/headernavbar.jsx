// 'use client';
// import styles from "./header.module.css"
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faExchangeAlt, faSyncAlt, faPaperPlane, faDownload, faTimes, faWallet, faListAlt, faCog, faCopy, faBell, faExpand,faUser,faQrcode } from '@fortawesome/free-solid-svg-icons';
// import { AiOutlineQrcode } from "react-icons/ai";

    
// const Headerbar = () => {
//     const router = useRouter();

//     const handleIconClick = (iconName) => {
//         console.log(`${iconName} button clicked`);
//         switch (iconName) {
          
//           case 'Settings':
//             // Handle settings logic here
//             break;
//           case 'Notification':
//             // Handle notification logic here
//             break;
//           case 'Enlarge':
//             // Handle enlarge logic here
//             break;
//           default:
//             break;
//         }
//       };
    
  
//     return (
      
//     <div className={styles.container}>
//         <div className={styles.header}>
//         <div className={styles.leftSection} >
            
//         </div>
//             <div className={styles.rightSide}>
           
//             <FontAwesomeIcon icon={faCopy} size="1x" onClick={() => handleIconClick('copy')} />

//             <FontAwesomeIcon icon={faQrcode} size="1x" onClick={() => handleIconClick('Scanner')} />
//             {/* <FontAwesomeIcon icon={faCog} onClick={() => handleIconClick('Settings')} /> */}
//             <FontAwesomeIcon icon={faBell} onClick={() => handleIconClick('Notification')} />

//             </div>
//         </div>
//     </div>
    

//     );
//   };
  
//   export default Headerbar;

// 'use client';
// import styles from "./header.module.css";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell, faQrcode, faCopy } from '@fortawesome/free-solid-svg-icons';
// import QrScanner from 'react-qr-scanner';

// const Headerbar = () => {
//     const router = useRouter();
//     const [isScanning, setIsScanning] = useState(false);

//     const handleIconClick = (iconName) => {
//         console.log(`${iconName} button clicked`);
//         switch (iconName) {
//             case 'Scanner':
//                 setIsScanning(true);
//                 break;
//             case 'Notification':
//                 // Handle notification logic here
//                 break;
//             case 'Copy':
//                 console.log('Copy button clicked');
//                 // Handle copy logic here
//                 break;
//             default:
//                 break;
//         }
//     };

//     const handleScan = (data) => {
//         if (data) {
//             console.log('Scanned QR Code:', data);
//             setIsScanning(false);
//         }
//     };

//     const handleError = (err) => {
//         console.error('Error scanning QR Code:', err);
//     };

//     return (
//         <div className={styles.container}>
//             <div className={styles.header}>
//                 <div className={styles.leftSection}></div>
//                 <div className={styles.rightSide}>
//                     <FontAwesomeIcon icon={faCopy} size="1x" onClick={() => handleIconClick('Copy')} />
//                     <FontAwesomeIcon icon={faQrcode} size="1x" onClick={() => handleIconClick('Scanner')} />
//                     <FontAwesomeIcon icon={faBell} onClick={() => handleIconClick('Notification')} />
//                 </div>
//             </div>
//             {isScanning && (
//                 <div className={styles.scanner}>
//                     <QrScanner
//                         delay={300}
//                         onError={handleError}
//                         onScan={handleScan}
//                         style={{ width: '100%' }}
//                     />
//                     <button onClick={() => setIsScanning(false)}>Close Scanner</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Headerbar;

  
'use client';
import styles from "./header.module.css";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faQrcode, faCopy } from '@fortawesome/free-solid-svg-icons';
import QrScanner from 'react-qr-scanner';

const Headerbar = () => {
    const router = useRouter();
    const [isScanning, setIsScanning] = useState(false);

    const handleIconClick = (iconName) => {
        console.log(`${iconName} button clicked`);
        switch (iconName) {
            case 'Scanner':
                setIsScanning(true);
                break;
            case 'Notification':
                // Handle notification logic here
                break;
            case 'Copy':
                console.log('Copy button clicked');
                // Handle copy logic here
                break;
            default:
                break;
        }
    };

    const handleScan = (data) => {
        if (data) {
            console.log('Scanned QR Code:', data);
            setIsScanning(false);
        }
    };

    const handleError = (err) => {
        console.error('Error scanning QR Code:', err);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.leftSection}></div>
                <div className={styles.rightSide}>
                    <FontAwesomeIcon icon={faCopy} size="1x" onClick={() => handleIconClick('Copy')} />
                    <FontAwesomeIcon icon={faQrcode} size="1x" onClick={() => handleIconClick('Scanner')} />
                    <FontAwesomeIcon icon={faBell} onClick={() => handleIconClick('Notification')} />
                </div>
            </div>
            {isScanning && (
                <div className={styles.fullScreenScanner}>
                    <QrScanner
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: '100%' }}
                    />
                    <button className={styles.closeButton} onClick={() => setIsScanning(false)}>Close Scanner</button>
                </div>
            )}
        </div>
    );
};

export default Headerbar;
