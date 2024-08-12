'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../switchform/switch_formset.css';

const SimpleModeSwitch = () => {
    const router = useRouter();
    
    const switchhandleBackClick = () => {
        let redirectUrl = '/Dashboard/Settings/setting'; // Use relative URL
        router.push(redirectUrl);
    };

    return (
        <div className="switch_container">
            <div className='switch_card'>
                <ArrowBackIcon 
                    className="switch_back_icon" 
                    onClick={switchhandleBackClick} // Corrected event handler
                />
                <div className='switch_card1'>
                    <img src="/image_cat.jpg" className="switch_image" />
                </div>
                <div className='switch_card2'>
                    <label className="center-label">Switch on Simple mode</label>
                </div>
                <div className='switch_card3'>
                    <label className="center-label1">This makes it easy for you to hold USD and send money to your friends</label>
                </div>
                <div className='switch_card4'>
                    <button className='switchs_now'>
                        <span className='switch_now'>Switch Now</span>
                    </button>
                    <button className='may_later'>
                        <span className='maybe'>Maybe later</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SimpleModeSwitch;
