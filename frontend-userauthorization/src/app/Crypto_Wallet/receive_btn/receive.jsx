"use client";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import styles from './receive.module.css'; // Import the CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCopy, faQrcode, faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/system'; // Import styled from @mui/system
import { FaUserCircle } from 'react-icons/fa';
import Typography from '@mui/material/Typography';
import axios from 'axios'; // Ensure axios is imported

export default function Receive() {
    const [user, setUserProfile] = useState({});
    const [profileImage, setProfileImage] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [copyState, setCopyState] = useState({ id: false, address: false });
    const [copyType, setCopyType] = useState('');
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const router = useRouter();
    const userId = 'dupC0004';
    const ethereumAddress = '0x0b77...3E32'; // Example address
    const bitcoinAddress = 'bc1qdg...yr62'; // Example address

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/profile/${userId}/`);
            setUserProfile(response.data);
            if (response.data.user_profile_photo) {
                const baseURL = 'http://localhost:8000/profile_photos';
                let imageUrl = '';

                if (typeof response.data.user_profile_photo === 'string' && response.data.user_profile_photo.startsWith('http')) {
                    imageUrl = response.data.user_profile_photo;
                } else if (response.data.user_profile_photo && response.data.user_profile_photo.startsWith('/')) {
                    imageUrl = `${baseURL}${response.data.user_profile_photo}`;
                } else if (response.data.user_profile_photo && response.data.user_profile_photo.data) {
                    const byteArray = new Uint8Array(response.data.user_profile_photo.data);
                    const base64String = btoa(
                        byteArray.reduce((data, byte) => data + String.fromCharCode(byte), '')
                    );
                    imageUrl = `data:image/jpeg;base64,${base64String}`;
                }

                setProfileImage(imageUrl);
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    const handleQr = (e, type) => {
        e.stopPropagation();
    
        if (type === 'ethereum') {
            router.push(`/Crypto_Wallet/receive_btn/ethereum_btn?address=${ethereumAddress}`);
        } else if (type === 'bitcoin') {
            router.push(`/Crypto_Wallet/receive_btn/bitcoin_btn?address=${bitcoinAddress}`);
        }
    };
    
    

    const handleCopy = (type) => {
        let textToCopy;
        if (type === 'id') {
            textToCopy = userId;
        } else if (type === 'ethereum') {
            textToCopy = ethereumAddress;
        } else if (type === 'bitcoin') {
            textToCopy = bitcoinAddress;
        }
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log(`${type} address copied to clipboard`);
                setCopyType(type);
                setCopyState(prevState => ({ ...prevState, [type]: true }));
                setTimeout(() => {
                    setCopyState(prevState => ({ ...prevState, [type]: false }));
                    setCopyType('');
                }, 2000); // Show check icon for 2 seconds
            })
            .catch(err => console.error('Failed to copy:', err));
    };

    const handleDivClick = (type) => {
        let textToCopy;
        if (type === 'id') {
            textToCopy = userId;
        } else if (type === 'ethereum') {
            textToCopy = ethereumAddress;
        } else if (type === 'bitcoin') {
            textToCopy = bitcoinAddress;
        }
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert(`${type} address copied to clipboard`);
            })
            .catch(err => console.error('Failed to copy:', err));
    };

    const handleBackClick = () => {
        router.push('/Crypto_Wallet/Dashboard');
    };

    const ProfileImage = styled('img')({
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '5px',
        border: '2px solid white',
    });

    // Memoize filteredSections to update based on searchQuery
    const filteredSections = useMemo(() => [
        { id: 'profile', title: 'Profile', visible: userId.toLowerCase().includes(searchQuery.toLowerCase().trim()) },
        { id: 'ethereum', title: 'Ethereum address', visible: ethereumAddress.toLowerCase().includes(searchQuery.toLowerCase().trim()) },
        { id: 'bitcoin', title: 'Bitcoin address', visible: bitcoinAddress.toLowerCase().includes(searchQuery.toLowerCase().trim()) },
        { id: 'buyCrypto', title: 'Buy Crypto', visible: 'buy crypto'.includes(searchQuery.toLowerCase().trim()) },
    ], [searchQuery, userId, ethereumAddress, bitcoinAddress]);

    return (
        <div className={styles.container}>
            <div>
                <ArrowBackIcon 
                    onClick={handleBackClick} 
                    className={`${styles.backIcon} ${styles.iconHover}`} 
                />
                <h1 className={styles.heading}>
                    Received crypto and NFTs
                </h1>
            </div>
            <div className={styles.searchContainer}>
                <div className={styles.search}>
                    <input
                        className={`${styles.searchInput} ${isFocused ? styles.searchInputActive : ''}`}
                        type="text"
                        placeholder="Search assets..."
                        value={searchQuery} // Controlled input for search
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                    <a
                        href="#"
                        className={`${styles.searchIcon} ${isFocused ? styles.searchIconHover : ''}`}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </a>
                </div>
            </div>

            {/* Profile Section */}
            {filteredSections.find(section => section.id === 'profile' && section.visible) && (
                <div 
                    className={`${styles.profileDiv} ${styles.hoverableDiv}`}
                    onClick={() => handleDivClick('id')}
                    style={{ display: 'flex', margin: '45px 0 0 30px', border: '1px solid gray', width: '330px', alignItems: 'center', padding: '15px', borderRadius: '12px' }}
                >
                    <div>
                        {profileImage ? (
                            <ProfileImage src={profileImage} alt="Profile Image" />
                        ) : (
                            <FaUserCircle className={styles.profileIcon} />
                        )}
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <Typography variant="h9" style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '15px' }}>
                            {userId}
                        </Typography>
                        <p style={{ fontSize: '11px', color: 'gray' }}>Share username to</p>
                        <p style={{ fontSize: '11px', color: 'gray' }}>receive crypto or ....</p>
                    </div>
                    <div style={{ margin: '10px 0 0 40px', height: '40px', width: '40px', backgroundColor: 'rgb(50, 53, 61)', borderRadius: '40px', position: 'relative', left: '60px' }}>
                        <FontAwesomeIcon 
                            icon={copyState.id ? faCheck : faCopy} 
                            onClick={(e) => { e.stopPropagation(); handleCopy('id'); }} 
                            style={{ margin: '12px', cursor: 'pointer', color: 'white' }} 
                        />
                    </div>
                </div>
            )}

            {/* Ethereum Section */}
            {filteredSections.find(section => section.id === 'ethereum' && section.visible) && (
                <div 
                    className={`${styles.ethereumDiv} ${styles.hoverableDiv}`}
                    onClick={() => handleDivClick('ethereum')}
                    style={{ display: 'flex', margin: '25px 0 0 30px', border: '1px solid gray', width: '330px', alignItems: 'center', padding: '20px', borderRadius: '12px' }}
                >
                    <div>
                        <img src="../ethereum_image.jpg" alt="Ethereum_image" style={{ height: '35px', width: '35px', borderRadius: '50px', border: '1px solid white' }} />
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <p style={{ fontSize: '14px' }}>Ethereum address</p>
                        <p style={{ fontSize: '11px', color: 'gray' }}>{ethereumAddress} </p>
                    </div>
                    <div style={{ height: '40px', width: '40px', backgroundColor: 'rgb(50, 53, 61)', borderRadius: '40px', position: 'relative', left: '24px' }}>
                        <FontAwesomeIcon
                            icon={faQrcode}
                            size="1x"
                            onClick={(e) => handleQr(e, 'ethereum')}
                            className={styles.iconHover}
                            style={{ margin: '12px', cursor: 'pointer', color: 'white' }}
                        />
                    </div>
                    <div style={{ height: '40px', width: '40px', backgroundColor: 'rgb(50, 53, 61)', borderRadius: '40px', position: 'relative', left: '36px' }}>
                        <FontAwesomeIcon 
                            icon={copyState.ethereum ? faCheck : faCopy} 
                            onClick={(e) => { e.stopPropagation(); handleCopy('ethereum'); }} 
                            className={styles.iconHover}
                            style={{ margin: '12px', cursor: 'pointer', color: 'white' }} 
                        />
                    </div>
                </div>
            )}

            {/* Bitcoin Section */}
            {filteredSections.find(section => section.id === 'bitcoin' && section.visible) && (
                <div 
                    className={`${styles.bitcoinDiv} ${styles.hoverableDiv}`}
                    onClick={() => handleDivClick('bitcoin')}
                    style={{ display: 'flex', margin: '25px 0 0 30px', border: '1px solid gray', width: '330px', alignItems: 'center', padding: '20px', borderRadius: '12px' }}
                >
                    <div>
                        <img src="../bitcoin_img1.png" alt="bitcoin_image" style={{ height: '35px', width: '35px', borderRadius: '50px', border: '1px solid white', objectFit: 'cover' }} />
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <p style={{ fontSize: '14px' }}>Bitcoin address</p>
                        <p style={{ fontSize: '11px', color: 'gray' }}>{bitcoinAddress} </p>
                    </div>
                    <div style={{ height: '40px', width: '40px', backgroundColor: 'rgb(50, 53, 61)', borderRadius: '40px', position: 'relative', left: '40px' }}>
                        <FontAwesomeIcon
                            icon={faQrcode}
                            size="1x"
                            onClick={(e) => handleQr(e, 'bitcoin')}
                            className={styles.iconHover}
                            style={{ margin: '12px', cursor: 'pointer', color: 'white' }}
                        />
                    </div>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon 
                            icon={copyState.bitcoin ? faCheck : faCopy} 
                            onClick={(e) => { e.stopPropagation(); handleCopy('bitcoin'); }} 
                            className={styles.iconHover}
                        />
                    </div>
                </div>
            )}

            {/* Buy Crypto Section */}
            {filteredSections.find(section => section.id === 'buyCrypto' && section.visible) && (
                <div 
                    className={`${styles.buyButtonDiv} ${styles.hoverableDiv}`}
                    style={{ margin: '0 30px', border: '1px solid white', width: '330px', height: '40px', borderRadius: '10px', padding: '8px', justifyContent: 'space-between', position: 'relative', top:'35px' }}
                >
                    <button 
                        onClick={() => router.push('/Crypto_Wallet/Dashboard/buy_btn')} // Navigate to the buy page
                    >
                        Buy Crypto
                    </button>
                    <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '190px', color: 'white' }} />
                </div>
            )}
        </div>
    );
}



