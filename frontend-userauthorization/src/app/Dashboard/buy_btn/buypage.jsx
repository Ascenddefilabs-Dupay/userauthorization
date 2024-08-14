"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const buypage = () => {

    const router = useRouter();

    const handleBackClick = () => {
        console.log('Back button clicked');
        router.push('/Dashboard')
      };
  return (
    <div>
      <div style={{backgroundColor: 'black', width: '400px',margin: '0 auto', height: '100vh', display: 'flex', color: 'white'}}>
      <div >
        <IconButton className="backarrow" onClick={handleBackClick} sx={{ color: 'white' }}>
            <ArrowBackIcon />
        </IconButton>
        Buy page
      </div>
      
      </div>
    </div>
  )
}

export default buypage
