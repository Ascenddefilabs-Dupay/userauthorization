'use client';
import React from 'react';
import { Box, Button, Typography, Link, IconButton, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import './AddCrypto.module.css'; // Import the CSS file

const AddCrypto = () => {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleBackClick = () => {
    router.push('/Dashboard'); // Ensure the correct path here
  };

  const handleAddCryptoClick = () => {
    console.log('Add crypto with Coinbase Onramp clicked');
  };

  const handleTransferClick = () => {
    console.log('Transfer from another wallet clicked');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center', // Center content vertically
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh', // Ensure the screen height covers the entire viewport
        width: '100%',
        maxWidth: '400px', // Set the screen width to 400px
        padding: 2,
        margin: '0 auto', // Center the box horizontally
        boxSizing: 'border-box', // Include padding in the element's total width and height
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <Box sx={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', marginBottom: 2, width: '100%' }}>
          <IconButton onClick={handleBackClick} sx={{ color: '#fff', marginLeft: -1 }}>
            <ArrowBackIcon />
          </IconButton>          
          <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', flexGrow: 5, color: '#fff', marginLeft: 13, }}>
            Add Crypto
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Box
          component="img"
          src="/crypto.png"
          alt="Coinbase"
          sx={{ width: '90%', height: 'auto', maxWidth: 300, maxHeight: 240, marginRight: 2, marginLeft: 2 }}
        />
      </Box>
      <Typography   variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold',fontSize: '22px', color: '#fff',
             marginLeft: 0,marginTop: 0, flexGrow: 1  }} >  Buy or transfer from Coinbase 
         </Typography>
         <Typography variant="body2" sx={{ textAlign: 'center' ,color: 'gray', marginBottom: 5 }}>
            You can add crypto from your Coinbase account or another wallet.
        </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handleAddCryptoClick}
        sx={{ 
          marginBottom: 2, 
          width: '80%', 
          borderRadius: 12,
          '&:hover': { 
            backgroundColor: '#1976d2' 
          } 
        }}
      >
        Add crypto with Coinbase Onramp
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleTransferClick}
        sx={{ 
          color: '#fff', 
          borderColor: '#fff', 
          width: '80%', 
          borderRadius: 12,
          '&:hover': { 
            backgroundColor: '#333', 
            borderColor: '#333'
          } 
        }}
      >
        Transfer from another wallet
      </Button>
      <Typography variant="caption" display="block" sx={{ marginTop: 2, textAlign: 'center', paddingX: 2 }}>
        <p>Use of Coinbase.com's account linkage feature is 
        subject to Coinbase.com's{' '}</p>
        <Link href="https://www.coinbase.com/user-agreement" target="_blank" sx={{ color: 'blue' }}>
          User Agreement
        </Link>{' '}
        and{' '}
        <Link href="https://www.coinbase.com/privacy-policy" target="_blank" sx={{ color: 'blue' }}>
          Privacy Policy
        </Link>.
      </Typography>
    </Box>
  );
};

export default AddCrypto;
