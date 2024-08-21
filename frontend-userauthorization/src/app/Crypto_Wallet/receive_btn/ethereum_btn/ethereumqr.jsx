// 'use client';
// import React, { useState } from 'react';
// import { useSearchParams, useRouter } from 'next/navigation';
// import { IoMdClose } from 'react-icons/io';
// import QRCode from 'qrcode.react';
// import styles from './ethereum.module.css';

// export default function EthereumPage() {
//     const searchParams = useSearchParams();
//     const router = useRouter();
//     const address = searchParams.get('address');
//     const [copied, setCopied] = useState(false);
//     const [dropdownVisible, setDropdownVisible] = useState(false);

//     const handleCopyClick = () => {
//         navigator.clipboard.writeText(address)
//             .then(() => {
//                 setCopied(true);
//                 setTimeout(() => setCopied(false), 2000);
//             })
//             .catch(err => {
//                 console.error('Failed to copy: ', err);
//             });
//     };

//     const handleCloseClick = () => {
//         router.push('/receive_btn');
//     };

//     const handleLearnMoreClick = () => {
//         setDropdownVisible(!dropdownVisible);
//     };

//     const handleGotItClick = () => {
//         setDropdownVisible(false);
//     };

//     const handleQRCodeClick = () => {
//         navigator.clipboard.writeText(address)
//             .then(() => {
//                 setCopied(true);
//                 setTimeout(() => setCopied(false), 2000);
//             })
//             .catch(err => {
//                 console.error('Failed to copy: ', err);
//             });
//     };

//     return (
//         <div className={styles.container}>
//             <div className={styles.closeButton} onClick={handleCloseClick}>
//                 <IoMdClose className={styles.closeIcon} />
//             </div>
//             <div className={styles.ethadd}>
//                 <div>
//                     <p style={{ color: 'gray' }}>Your Ethereum address</p>
//                     <p>{address}</p>
//                     <div className={`${styles.copybutton} ${copied ? styles.copiedButton : ''}`}>
//                         <button style={{ fontWeight: 'bold', marginLeft: '3px' }} onClick={handleCopyClick}>
//                             {copied ? 'Copied' : 'Copy'}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <div style={{ width: '350px', margin: '1px 20px 0 15px' }}>
//                 <p style={{ position: 'relative', top: '210px', fontSize: '12px', color: 'gray' }}>
//                     Use this address for receiving tokens and NFTs on Ethereum,
//                     Base, Polygon, Avalanche, Arbitrum, and other compatible networks.
//                     Transactions may take a few minutes to complete.
//                 </p>
//                 <p></p>
//                 <p></p>
//                 <p style={{ position: 'relative', top: '210px', fontSize: '12px', color: 'gray' }}>
//                     <button onClick={handleLearnMoreClick}>
//                         <a href="#" style={{ color: 'blue' }}>Learn more </a>
//                         about ERC-20 tokens.
//                     </button>
//                 </p>
//             </div>

//             <div style={{ position: 'relative', backgroundColor: 'Gray', width: '300px', height: '40px', borderRadius: '20px', top: '270px', padding: '7px', left: '30px' }}>
//                 <button style={{ position: 'relative', left: '65px' }}>
//                     Share your address
//                 </button>
//             </div>

//             <div style={{ position: 'relative', top: '-170px', left: '90px' }}>
//                 <QRCode
//                     value={address}
//                     size={135}
//                     fgColor="#000000"
//                     level="H"
//                     includeMargin={true}
//                     renderAs="svg"
//                     imageSettings={{
//                         src: "/ethereum_image.jpg", // Add the path to your Ethereum logo here
//                         x: null,
//                         y: null,
//                         height: 24,
//                         width: 24,
//                         excavate: true,
//                     }}
//                 />
//                 {/* <p>Scan to copy the address</p> */}
//             </div>

//             {dropdownVisible && (
//                 <div className={styles.dropdown}>
//                     <p style={{ marginRight: '160px', fontSize: '18px' }}>Did you know?</p>
//                     <p style={{ color: 'gray', fontSize: '14px' }}>
//                         ERC-20 tokens are issued on the Ethereum
//                         <p style={{ marginRight: '7px', fontSize: '14px' }}>blockchain. That means you can use your </p>
//                         <p style={{ marginLeft: '-1px', fontSize: '14px' }}> ETH wallet address to receive any ERC-20 </p>
//                         <p style={{ marginRight: '237px', fontSize: '14px' }}> token!</p>
//                     </p>
//                     <button onClick={handleGotItClick} className={styles.gotItButton}>Got it</button>
//                 </div>
//             )}
//         </div>
//     );
// }





"use client";
import React, { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import QRCode from 'qrcode.react';
import styles from './ethereum.module.css';

export default function EthereumPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const address = searchParams.get('address');
    const [copied, setCopied] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(address)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    const handleCloseClick = () => {
        router.push('/Crypto_Wallet/receive_btn');
    };

    const handleLearnMoreClick = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleGotItClick = () => {
        setDropdownVisible(false);
    };

    const handleQRCodeClick = () => {
        navigator.clipboard.writeText(address)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    const handleShareClick = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Ethereum Address',
                text: `Here is my Ethereum address: ${address}`,
                url: window.location.href
            }).catch((error) => console.error('Error sharing:', error));
        } else {
            alert('Sharing is not supported in this browser.');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.closeButton} onClick={handleCloseClick}>
                <IoMdClose className={styles.closeIcon} />
            </div>
            <div className={styles.ethadd}>
                <div>
                    <p style={{ color: 'gray' }}>Your Ethereum address</p>
                    <p>{address}</p>
                    <div className={`${styles.copybutton} ${copied ? styles.copiedButton : ''}`}>
                        <button style={{ fontWeight: 'bold', marginLeft: '3px' }} onClick={handleCopyClick}>
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                    </div>
                </div>
            </div>
            <div style={{ width: '350px', margin: '1px 20px 0 15px' }}>
                <p style={{ position: 'relative', top: '210px', fontSize: '12px', color: 'gray' }}>
                    Use this address for receiving tokens and NFTs on Ethereum,
                    Base, Polygon, Avalanche, Arbitrum, and other compatible networks.
                    Transactions may take a few minutes to complete.
                </p>
                <p></p>
                <p></p>
                <p style={{ position: 'relative', top: '210px', fontSize: '12px', color: 'gray' }}>
                    <button onClick={handleLearnMoreClick}>
                        <a href="#" style={{ color: 'blue' }}>Learn more </a>
                        about ERC-20 tokens.
                    </button>
                </p>
            </div>

            <div style={{ position: 'relative', backgroundColor: 'Gray', width: '300px', height: '40px', borderRadius: '20px', top: '270px', padding: '7px', left: '30px' }}>
                <button style={{ position: 'relative', left: '65px' }} onClick={handleShareClick}>
                    Share your address
                </button>
            </div>

            <div style={{ position: 'relative', top: '-170px', left: '110px' }}>
                <QRCode
                    value={address}
                    size={135}
                    fgColor="#000000"
                    level="H"
                    includeMargin={true}
                    renderAs="svg"
                    imageSettings={{
                        src: "/ethereum_image.jpg", // Add the path to your Ethereum logo here
                        x: null,
                        y: null,
                        height: 24,
                        width: 24,
                        excavate: true,
                    }}
                />
                {/* <p>Scan to copy the address</p> */}
            </div>

            {dropdownVisible && (
                <div className={styles.dropdown}>
                    <p style={{ marginRight: '160px', fontSize: '18px' }}>Did you know?</p>
                    <p style={{ color: 'gray', fontSize: '14px' }}>
                        ERC-20 tokens are issued on the Ethereum
                        <p style={{ marginRight: '7px', fontSize: '14px' }}>blockchain. That means you can use your </p>
                        <p style={{ marginLeft: '-1px', fontSize: '14px' }}> ETH wallet address to receive any ERC-20 </p>
                        <p style={{ marginRight: '237px', fontSize: '14px' }}> token!</p>
                    </p>
                    <button onClick={handleGotItClick} className={styles.gotItButton}>Got it</button>
                </div>
            )}
        </div>
    );
}
