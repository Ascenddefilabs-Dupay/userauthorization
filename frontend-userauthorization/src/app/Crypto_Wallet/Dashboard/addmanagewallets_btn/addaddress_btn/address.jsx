'use client';

import {useRouter} from 'next/navigation'
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './address.module.css'

const Home = () => {
    const router = useRouter();

    const handleBackClick = () => {
        router.push('/Crypto_Wallet/Dashboard/addmanagewallets_btn')
    }

return(        
    <div className={styles.container}>
        <div className={styles.backButton}>
            <IconButton onClick={handleBackClick} sx={{color: '#fff'}}>
            <ArrowBackIcon />
            </IconButton>
        </div>
        <div className={styles.progressBar}></div>
            <h1 className={styles.heading}>Add an address</h1>
           
            <img src="/Addaddress.svg" alt="Center Logo" className= {styles.image}/>
            
            <p className={styles.paragraph}>Each address includes a unique Ethereum and 
                Solana address that belongs to your wallet. 
                You can add up to 15 per wallet. 
                You can import them into other crypto wallets too.</p>

            <button className={styles.continueButton} onClick={() => console.log('continue button is clicked')}>
                Continue</button>        

    </div>
        )
    }
    export default Home;