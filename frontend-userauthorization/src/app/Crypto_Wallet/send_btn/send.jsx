"use client";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

import { FaCheck } from "react-icons/fa6";
import { colors } from '@mui/material';


export default function send(){

    const router = useRouter();

    const handleBackClick = () => {
        router.push('/Crypto_Wallet/Dashboard')
    }
    const handleAddCrytoClick = () => {
        router.push('/Crypto_Wallet/Dashboard/buy_btn')
    }

    return(
        <div style={{backgroundColor : 'black', width: '400px', 
                    margin: '0 auto', height: '100vh', color: 'white',
                    borderRadius: '12px',top: '1px' , alignItems: 'center'}}>
                <ArrowBackIcon  onClick={handleBackClick}  style={{margin : '15px 10px', cursor: 'pointer'}}/>
                <h1 style= {{marginTop: '-40px', marginLeft: '45px' , cursor: 'pointer',  fontFamily: 'Arial, Helvetica, sans-serif', /* Set the font for the entire container */
        }}>Send</h1>

            <div style={{alignItems: 'center'}}>
            <img src="/send_image.jpg" alt="Send_Image" style={{height: '180px', width: '180px', marginLeft:'120px', marginTop: '20px'}}/>

            </div>
            <div style={{marginTop: '50px',}}>
                <p style={{marginLeft: '100px'}}> To send, first add crypto to</p>                
                <p style={{marginLeft: '160px'}}> your wallet </p>
               <div style={{marginRight: '66px', position: 'relative'}}>
               <p style={{marginTop: '10px',marginLeft: '60px', color: 'gray', fontSize: '13px'}}>Use a Coinbase account to buy or transfer</p>
               <p   style={{ color: 'gray', fontSize: '13px',marginLeft: '90px'}}> crypto, or receive assets directly.</p>
               </div>
            </div>
            <div>
                
            </div>
           <div style={{ }}>
           <button      onClick={handleAddCrytoClick}                
                        style={{
                            marginTop: '85px',
                            padding: '10px',
                            background: 'linear-gradient(90deg, #007bff9f, #800080)',
                            color: 'white',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            border: 'none',
                            width: '90%',
                            marginLeft: '23px',
                        }}
                    >
                        Add crypto to your wallet
                    </button>
           </div>

        </div>
    )
}



