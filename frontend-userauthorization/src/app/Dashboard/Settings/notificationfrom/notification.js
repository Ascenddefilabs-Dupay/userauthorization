'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../notificationfrom/notification_set.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Switch } from '@mui/material';

const Notificationinterfacen = () => {
    const [hideproductionapp, setProductionAPP] = useState(false);
    const [hideinsightsapp, setInsighttipsnAPP] = useState(false);
    const [hideinspecialapp, setSpecialAPP] = useState(false);
    const [hidepriceapp, setPriceAPP] = useState(false);
    const [hidebtcapp, setBtcAPP] = useState(false);
    const [hideethapp, setEthAPP] = useState(false);
    const [hidenftapp, setNftAPP] = useState(false);
    const [hideaccountapp, setAccountAPP] = useState(false);
    const [hidemessageapp, setMessageAPP] = useState(false);
    const router = useRouter();

    const handleproduction = (event) => {
        setProductionAPP(event.target.checked);
    };

    const handleinsight = (event) => {
        setInsighttipsnAPP(event.target.checked);
    };

    const handlespecial = (event) => {
        setSpecialAPP(event.target.checked);
    };

    const handleprice = (event) => {
        setPriceAPP(event.target.checked);
    };

    const handlebtc = (event) => {
        setBtcAPP(event.target.checked);
    };

    const handleeth = (event) => {
        setEthAPP(event.target.checked);
    };

    const handlenft = (event) => {
        setNftAPP(event.target.checked);
    };

    const handleaccount = (event) => {
        setAccountAPP(event.target.checked);
    };

    const handlemessage = (event) => {
        setMessageAPP(event.target.checked);
    };

    const notificationhandleBackClick = () => {
        let redirectUrl = '/Dashboard/Settings/setting';
        router.push(redirectUrl);
    };

    return (
        <div className='notificatio_container'>
            <div className="notification_card">
                <div className="notification_header">
                    <ArrowBackIcon className="notify_icon" onClick={notificationhandleBackClick} />
                    <span>Notifications</span>
                </div>
                <div className="production_tab">
                    <button className='production_button'>
                        <div className="productioninfo">
                            <span className="announcement_tab">Product Announcement</span>
                            <span className="announcement_discription">Be the first to learn about our newest features</span>
                        </div>
                        <label className="production_switch">
                            <Switch checked={hideproductionapp} onChange={handleproduction} />
                        </label>
                    </button>
                </div>
                <div className="insights_tab">
                    <button className='insights_button'>
                        <div className="insight_info">
                            <span className="tips_tab">Insights and tips</span>
                        </div>
                        <label className="instight_switch">
                            <Switch checked={hideinsightsapp} onChange={handleinsight} />
                        </label>
                    </button>
                </div>
                <div className="special_tab">
                    <button className='special_button'>
                        <div className="special_info">
                            <span className="special_tab">Special offers</span>
                        </div>
                        <label className="special_switch">
                            <Switch checked={hideinspecialapp} onChange={handlespecial} />
                        </label>
                    </button>
                </div>
                <div className="price_tab">
                    <button className='price_button'>
                        <div className="price_info">
                            <span className="alert_tab">Price Alerts</span>
                            <span className="alert_discription">Get notified automatically when there is a big change in the price of an asset</span>
                        </div>
                        <label className="price_switch">
                            <Switch checked={hidepriceapp} onChange={handleprice} />
                        </label>
                    </button>
                </div>
                <div className="account_tab">
                    <button className='account_button'>
                        <div className="account_info">
                            <span className="account_tab">Account activity</span>
                        </div>
                        <label className="account_switch">
                            <Switch checked={hideaccountapp} onChange={handleaccount} />
                        </label>
                    </button>
                </div>
                <div className="message_tab">
                    <button className='message_button'>
                        <div className="message_info">
                            <span className="message_tab">Messages</span>
                            <span className="message_discription">Get notified when someone sends you a message</span>
                        </div>
                        <label className="message_switch">
                            <Switch checked={hidemessageapp} onChange={handlemessage} />
                        </label>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Notificationinterfacen;
