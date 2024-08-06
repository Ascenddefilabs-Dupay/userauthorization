// "use client"
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Button, IconButton } from '@mui/material';
// import { FaQrcode } from 'react-icons/fa';
// import QrScanner from 'react-qr-scanner';
// import styles from './Homepage.module.css';

// export default function HomePage() {
//     const [scannerOpen, setScannerOpen] = useState(false);
//     const [qrData, setQrData] = useState('');
//     const router = useRouter();

//     const handleQrClick = () => {
//         setScannerOpen(true);
//     };

//     const handleCloseScanner = () => {
//         setScannerOpen(false);
//     };

//     const handleScan = (data) => {
//         if (data) {
//             setQrData(data);
//             console.log('QR Code Data:', data);
//             handleCloseScanner();
//         }
//     };

//     const handleError = (error) => {
//         console.error('QR Scanner Error:', error);
//     };

//     return (
//         <>
//             <div className={styles.container}>
//                 {/* Other code */}

//                 <IconButton color="inherit" onClick={handleQrClick}>
//                     <FaQrcode style={{ fontSize: 18 }} />
//                 </IconButton>

//                 {scannerOpen && (
//                     <div className={styles.qrOverlay}>
//                         <QrScanner
//                             onScan={handleScan}
//                             onError={handleError}
//                             style={{ width: '100%', height: '100%' }}
//                         />
//                         <button className={styles.closeQrButton} onClick={handleCloseScanner}>
//                             Close
//                         </button>
//                     </div>
//                 )}

//                 {/* Other code */}
//             </div>
//         </>
//     );
// }





"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppBar, Toolbar, Button, Container, Card, CardContent, Fab, IconButton, Menu, MenuItem, Typography, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { AccountBalanceWallet, Explore, Settings, SwapHoriz, ContentCopy } from '@mui/icons-material';
import { FiGlobe } from 'react-icons/fi';
import { BiMessageRounded } from "react-icons/bi";
import { FaCheck, FaCog, FaPlus, FaQrcode, FaArrowDown, FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { IoSearch } from "react-icons/io5";
import { RiPieChartFill } from "react-icons/ri";
import QrScanner from 'react-qr-scanner';
import styles from './profileicon.module.css';
// import Draggable from 'react-draggable'; // The default
// import {DraggableCore} from 'react-draggable'; // <DraggableCore>
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

// CommonJS
// let Draggable = require('react-draggable');
// let DraggableCore = Draggable.DraggableCore;


export default function HomePage() {
    const [selectedButton, setSelectedButton] = useState('');
    const [navValue, setNavValue] = useState(0);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [scannerOpen, setScannerOpen] = useState(false);
    const [qrData, setQrData] = useState('');
    const router = useRouter();

    const toggleDropdown = () => {
        setDropdownVisible(prevState => !prevState);
    };

    const handleTopButtonClick = (button) => {
        setSelectedButton(button);
        console.log(button);
    };

    const handleNavChange = (event, newValue) => {
        setNavValue(newValue);
        router.push('/Dashboard');
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('srinivas...kar.cb.id');
        console.log('Email copied to clipboard');
    };

    const handleCloseDropdown = () => {
        setDropdownVisible(false);
    };

    const handleQrClick = () => {
        setScannerOpen(true);
    };

    const handleCloseScanner = () => {
        setScannerOpen(false);
    };

    const handleScan = (data) => {
        if (data) {
            setQrData(data);
            console.log('QR Code Data:', data);
            handleCloseScanner();
        }
    };

    const handleError = (error) => {
        console.error('QR Scanner Error:', error);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.emailBar}>
                    <div className={styles.walletAddress} onClick={toggleDropdown}>
                        <FaUserCircle />
                        srinivass...cb.id
                        <FaChevronDown className={styles.dropdownIcon} />
                    </div>
                    <div className={styles.iconGroup}>
                        {/* <IconButton color="inherit" onClick={handleCopyEmail}>
                            <ContentCopy style={{ fontSize: 18 }} />
                        </IconButton> */}
                        <IconButton color="inherit" onClick={handleQrClick}>
                            <FaQrcode style={{ fontSize: 18 }} />
                        </IconButton>
                        <IconButton color="inherit" onClick={handleCopyEmail}>
                            <BiMessageRounded style={{ fontSize: 24 }} />
                        </IconButton>
                    </div>
                </div>

                {dropdownVisible && (
                    <div className={styles.dropdown}>
                        <div className={styles.dropdownContent}>
                            <div className={styles.dropdownHeader}>Wallets</div>
                            <hr />
                            <div className={styles.dropdownItem}>
                                <FaUserCircle className={styles.profileIcon} />
                                <div className={styles.textContainer}>
                                    <div className={styles.userid}>srinivas7420.cb.id</div>
                                    <div>₹0.00</div>
                                </div>
                                <FaCheck className={styles.checkIcon} />
                            </div>
                            <Button className={styles.viewprofileButton} onClick={() => { handleCloseDropdown(); router.push('/Dashboard/viewprofile_btn'); }}>
                                View profile
                            </Button>
                            <Button className={styles.manageWalletsButton} onClick={() => { handleCloseDropdown(); router.push('/Dashboard/addmanagewallets_btn'); }}>
                                Add & manage wallets 
                                <Settings />
                            </Button>
                        </div>
                    </div>
                )}

                {scannerOpen && (
                    <div className={styles.qrOverlay}>
                        <QrScanner
                            onScan={handleScan}
                            onError={handleError}
                            style={{ width: '100%', height: '100%' }}
                        />
                        <button className={styles.closeQrButton} onClick={handleCloseScanner}>
                            Close
                        </button>
                    </div>
                )}

                <AppBar position="static" className={styles.appBar}>
                    <Toolbar className={styles.toolbar}>
                        <Typography variant="h5">₹0.00</Typography>

                        {/* Conditionally render buttonGroup */}
                        {!scannerOpen && (
                            <div className={styles.buttonGroup}>
                                <div className={styles.buttonContainer}>
                                    <Fab size="small" color="primary" onClick={() => handleTopButtonClick('Buy')}>
                                        <FaPlus fontSize={'18px'} color='white' />
                                    </Fab>
                                    <Typography variant="caption">Buy</Typography>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <Fab size="small" color="primary" onClick={() => handleTopButtonClick('Receive')}>
                                        <FaArrowDown fontSize={'20px'} color='white' />
                                    </Fab>
                                    <Typography variant="caption">Receive</Typography>
                                </div>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>

                <p style={{ fontWeight: 'bold', marginLeft: '20px' }}>New to Coinbase Wallet?</p>
                <p style={{ color: 'white', fontSize: '12px', marginLeft: '20px', color: 'gray' }}>Here's how to get started.</p>

                <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', flex: 1, marginBottom: '200px' }}>
                    <Card className={styles.card}>
                        <CardContent>
                            <div className={styles.imgdiv}> 
                                <img src="/Buycrypto-btn.imaage.jpg" alt="Buycrypto-btn_imaage.jpg" className={styles.image} />
                                <div className={styles.getstartbtn}>
                                    <Typography variant="h9" style={{ fontWeight: 'bold' }}>Fund your wallet</Typography>
                                    <p style={{ color: 'white', fontSize: '11px' }}>Get a free NFT by adding</p>
                                    <p style={{ color: 'white', fontSize: '11px' }}>ETH or USDC</p>
                                    <Button className={styles.button} onClick={() => handleTopButtonClick('Get started')}>
                                        Get started
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Container>

                {/* <BottomNavigation value={navValue} onChange={handleNavChange} showLabels className={styles.bottomNavigation}>
                    <BottomNavigationAction label="Assets" icon={<RiPieChartFill />} className={navValue === 0 ? styles.bottomNavigationActionSelected : styles.bottomNavigationAction} style={{ fontSize: 23 }} />
                    <BottomNavigationAction label="Transactions" icon={<SwapHoriz />} className={navValue === 1 ? styles.bottomNavigationActionSelected : styles.bottomNavigationAction} />
                    <BottomNavigationAction label="Browser" icon={<FiGlobe />} className={navValue === 2 ? styles.bottomNavigationActionSelected : styles.bottomNavigationAction} style={{ fontSize: 23 }} />
                    <BottomNavigationAction label="Explorer" icon={<IoSearch />} className={navValue === 3 ? styles.bottomNavigationActionSelected : styles.bottomNavigationAction} style={{ fontSize: 23 }} />
                    <BottomNavigationAction label="Settings" icon={<Settings />} className={navValue === 4 ? styles.bottomNavigationActionSelected : styles.bottomNavigationAction} />
                </BottomNavigation> */}
            </div>
        </>
    );
}

// if (process.env.NODE_ENV === 'development') {
//     const originalConsoleError = console.error;
//     console.error = (message, ...args) => {
//         if (/Warning: Reader: Support for defaultProps will be removed/.test(message)) {
//             return;
//         }
//         originalConsoleError(message, ...args);
//     };
// }