"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const addbankpage = () => {

    const router = useRouter();

    const handleBackClick = () => {
        console.log('Back button clicked');
        router.push('/Dashboard/fiatwallet')
      };
  return (
    <div>
      <div style={{backgroundColor: 'black', width: '400px',margin: '0 auto', height: '100vh', display: 'flex', color: 'white', borderRadius: '12px'}}>
      <div >
        <IconButton className="backarrow" onClick={handleBackClick} sx={{ color: 'white' }}>
            <ArrowBackIcon />
        </IconButton>
        addbank page
      </div>
      
      </div>
    </div>
  )
}

export default addbankpage
