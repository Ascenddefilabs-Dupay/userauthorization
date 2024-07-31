// 'use client';

// import React from 'react';
// import { Box, Button, Typography, Link, IconButton, useMediaQuery } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { useRouter } from 'next/navigation';

// const AddCrypto = () => {
//   const router = useRouter();
//   const isMobile = useMediaQuery('(max-width:600px)');

//   const handleBackClick = () => {
//     router.push('/Dashboard'); // Ensure the correct path here
//   };

//   const handleAddCryptoClick = () => {
//     console.log('Add crypto with Coinbase Onramp clicked');
//   };

//   const handleTransferClick = () => {
//     console.log('Transfer from another wallet clicked');
//   };

//   return (
    
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         backgroundColor: '#000',
//         color: '#fff',
//         minHeight: '200vh',
//         padding: 2,
//         ...(isMobile && { paddingX: 1 }),
//       }}
//     >
//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Box sx={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', marginBottom: 2 }}>
//           <IconButton onClick={handleBackClick} sx={{ color: '#fff', alignItems: 'center',marginRight: 18,  marginLeft: -23,  }}>
//             <ArrowBackIcon />
//           </IconButton>
//           <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: '#fff'  }}>
//             Add Crypto
//           </Typography>
//         </Box>
//       </Box>


//       <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
//         <Box
//           component="img"
//           src="/crypto.png"
//           alt="Coinbase"
//           sx={{ width: '90%', height: 'auto', maxWidth: 300, maxHeight: 240, marginRight: 2, marginLeft: 2 }}
//         />
//       </Box>
      
//       <Typography variant="body2" gutterBottom>
//         You can add crypto from your Coinbase account or another wallet.
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleAddCryptoClick}
//         sx={{ marginBottom: 2, width: '30%', borderRadius: 12 }}
//       >
//         Add crypto with Coinbase Onramp
//       </Button>
//       <Button
//         variant="outlined"
//         color="primary"
//         onClick={handleTransferClick}
//         sx={{ color: '#fff', borderColor: '#fff', width: '30%', borderRadius: 12 }}
//       >
//         Transfer from another wallet
//       </Button>
//       <Typography variant="caption" display="block" sx={{ marginTop: 2, textAlign: 'center', paddingX: 2 }}>
//         <p>Use of Coinbase.com's account linkage feature is 
//         subject to Coinbase.com's{' '}</p>
//         <Link href="https://www.coinbase.com/user-agreement" target="_blank" sx={{ color: '#fff' }}>
//           User Agreement
//         </Link>{' '}
//         and{' '}
//         <Link href="https://www.coinbase.com/privacy-policy" target="_blank" sx={{ color: '#fff' }}>
//           Privacy Policy
//         </Link>.
//       </Typography>
//     </Box>
//   );
// };

// export default AddCrypto;
// 'use client';

// import React from 'react';
// import { Box, Button, Typography, Link, IconButton } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { useRouter } from 'next/navigation';
// import './AddCrypto.css'; // Import the CSS file

// const AddCrypto = () => {
//   const router = useRouter();

//   const handleBackClick = () => {
//     router.push('/Dashboard'); // Ensure the correct path here
//   };

//   const handleAddCryptoClick = () => {
//     console.log('Add crypto with Coinbase Onramp clicked');
//   };

//   const handleTransferClick = () => {
//     console.log('Transfer from another wallet clicked');
//   };

//   return (
//     <Box className="container">
//       <Box className="content">
//         <Box className="header">
//           <IconButton onClick={handleBackClick} className="backButton">
//             <ArrowBackIcon />
//           </IconButton>
//           <Typography variant="h6" className="title">
//             Add Crypto
//           </Typography>
//         </Box>

//         <Box className="imageContainer">
//           <Box
//             component="img"
//             src="/crypto.png"
//             alt="Coinbase"
//             className="cryptoImage"
//           />
//         </Box>

//         <Typography variant="body2" className="description">
//           You can add crypto from your Coinbase account or another wallet.
//         </Typography>

//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleAddCryptoClick}
//           className="addButton"
//         >
//           Add crypto with Coinbase Onramp
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           onClick={handleTransferClick}
//           className="transferButton"
//         >
//           Transfer from another wallet
//         </Button>

//         <Typography variant="caption" display="block" className="footer">
//           <p>Use of Coinbase.com's account linkage feature is subject to Coinbase.com's</p>
//           <Link href="https://www.coinbase.com/user-agreement" target="_blank" className="link">
//             User Agreement
//           </Link>{' '}
//           and{' '}
//           <Link href="https://www.coinbase.com/privacy-policy" target="_blank" className="link">
//             Privacy Policy
//           </Link>.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default AddCrypto;
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton, useMediaQuery, Typography, Button, Link } from '@mui/material';
import styles from './AddCrypto.css';

const AddCrypto = () => {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleBackClick = () => {
    router.push('/Dashboard');
  };

  const handleAddCryptoClick = () => {
    console.log('Add crypto with Coinbase Onramp clicked');
  };

  const handleTransferClick = () => {
    console.log('Transfer from another wallet clicked');
  };

  return (
    <div className={isMobile ? `${styles.container} ${styles.mobile}` : styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <IconButton onClick={handleBackClick} className={styles.backButton}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            Add Crypto
          </Typography>
        </div>

        <div className={styles.imageContainer}>
          <img src="/crypto.png" alt="Coinbase" className={styles.image} />
        </div>

        <Typography variant="body2" className={styles.description}>
          You can add crypto from your Coinbase account or another wallet.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleAddCryptoClick}
          className={styles.addButton}
        >
          Add crypto with Coinbase Onramp
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleTransferClick}
          className={styles.transferButton}
        >
          Transfer from another wallet
        </Button>

        <Typography variant="caption" className={styles.notice}>
          <p>Use of Coinbase.com's account linkage feature is subject to Coinbase.com's</p>
          <Link href="https://www.coinbase.com/user-agreement" target="_blank" className={styles.link}>
            User Agreement
          </Link>{' '}
          and{' '}
          <Link href="https://www.coinbase.com/privacy-policy" target="_blank" className={styles.link}>
            Privacy Policy
          </Link>.
        </Typography>
      </div>
    </div>
  );
};

export default AddCrypto;
