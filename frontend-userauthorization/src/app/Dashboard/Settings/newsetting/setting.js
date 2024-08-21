'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Switch } from '@mui/material';
import './Setting.css';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LanguageIcon from '@mui/icons-material/Language';
import LockIcon from '@mui/icons-material/Lock';
// import KeyboardIcon from '@mui/icons-material/Keyboard';
import ShieldMoonIcon from '@mui/icons-material/ShieldMoon';
import NotificationsIcon from '@mui/icons-material/Notifications';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';


const Settings = () => {
  const router = useRouter();
  const [simpleMode, setSimpleMode] = useState(false);

  const handleNavigation = () => {
<<<<<<<< HEAD:frontend-userauthorization/src/app/Crypto_Wallet/Dashboard/Settings/newsetting/setting.js
    router.push('/Crypto_Wallet/Dashboard/Settings/network_set');
========
    router.push('/Dashboard/Settings/network_set');
>>>>>>>> 9014de0d7185c0816795598317f08f90d5d007d1:frontend-userauthorization/src/app/Dashboard/Settings/newsetting/setting.js
  };

  const handleSwitch = (event) => {
    setSimpleMode(event.target.checked);
    if (event.target.checked) {
<<<<<<<< HEAD:frontend-userauthorization/src/app/Crypto_Wallet/Dashboard/Settings/newsetting/setting.js
      router.push('/Crypto_Wallet/Dashboard/Settings/switchform');
    }
  };
  const handleSignOut = () => {
    let redirectUrl = '/Crypto_Wallet/Dashboard/Settings/signoutform';
    router.push(redirectUrl);
  };
  // const handleDeveloper = () => {
  //   let redirectUrl = '/Crypto_Wallet/Dashboard/developerform';
  //   router.push(redirectUrl);
  // };
  const handleDisplay = () => {
    let redirectUrl = '/Crypto_Wallet/Dashboard/Settings/displayform';
    router.push(redirectUrl);
  };
  const handleSecurity = () => {
    let redirectUrl = '/Crypto_Wallet/Dashboard/Settings/securityfrom';
    router.push(redirectUrl);
  };
  const handleNotification = () => {
    let redirectUrl = '/Crypto_Wallet/Dashboard/Settings/notificationfrom';
========
      router.push('/Dashboard/Settings/switchform');
    }
  };
  const handleSignOut = () => {
    let redirectUrl = '/Dashboard/Settings/signoutform';
    router.push(redirectUrl);
  };
  // const handleDeveloper = () => {
  //   let redirectUrl = 'http://localhost:3000//Dashboard/developerform';
  //   router.push(redirectUrl);
  // };
  const handleDisplay = () => {
    let redirectUrl = '/Dashboard/Settings/displayform';
    router.push(redirectUrl);
  };
  const handleSecurity = () => {
    let redirectUrl = '/Dashboard/Settings/securityfrom';
    router.push(redirectUrl);
  };
  const handleNotification = () => {
    let redirectUrl = '/Dashboard/Settings/notificationfrom';
>>>>>>>> 9014de0d7185c0816795598317f08f90d5d007d1:frontend-userauthorization/src/app/Dashboard/Settings/newsetting/setting.js
    router.push(redirectUrl);
  }
  return (
    <div className='container'>
      <div className="card0">
        <div className="settings">
          <h1>Settings</h1>
        </div>
        <div className="cards0">
          <div className="card"> 
            <div className="search-container">
              <SearchIcon className="search-icon" />
              <input id="search" type="text" placeholder="Search" />
            </div>
          </div>
    
          <div className="card1">
            <button className="wallet-button">
              <AccountBalanceWalletIcon className="wallet-icon" />
              <span className="button-text">Wallet</span>
            </button>

          </div>

          <div className="subcard">
            <div className="card2">
              <button className="username">
                <img className="card-image" />
                <div className="labels0">
                  <span className="user">username.co.id </span>
                  <span className="recovery">Recovery phase, Profile, connections and more</span>
                </div>
                <ChevronRightIcon className="righticon" />
              </button>
            </div>

            <div className="card3">
              <button className="manage_wallet">
                <AddCircleIcon className="add_circle" />
                <span className="button-text">Manage all wallets</span>
                <ChevronRightIcon className="righticon0" />
              </button>

            </div>
            
          </div>
          
          <div className="card6">
            <button className="developers">
              <PhoneIphoneIcon className="phone_icon" />
              <div className="labels2">
                <span className="develop">Simple Mode</span>
                <span className="develop1">Perfect for beginner</span>
              </div>
                <label className="simple_switch">
                  <Switch
                    checked={simpleMode} onChange={handleSwitch}/>
                </label>
            </button>
          </div>
          <div className="card4">
            <button className="networks" onClick={handleNavigation}>
              <LanguageIcon className="globe_icon" />
              <div className="labels">
                <span className="network">Networks </span>
                <span className="network1">Edit or add Networks</span>
              </div>
              <ChevronRightIcon className="righticon1" />
            </button>
          </div>
          <div className="card5">
            <button className="securities" onClick={handleSecurity}>
              <LockIcon className="lock_icon" />
              <div className="labels1">
                <span className="security">Security </span>
                <span className="security1">Lock timer, Password</span>
              </div>
              <ChevronRightIcon className="righticon2" />
            </button>
          </div>
          
          <div className="card7">
            <button className="displays" onClick={handleDisplay}>
              <ShieldMoonIcon className="shield_moon_icon" />
              <div className="labels3">
                <span className="display">Display </span>
                <span className="display1">Dark mode, currency, balances</span>
              </div>
              <ChevronRightIcon className="righticon4" />
            </button>
          </div>
          <div className="card8">
            <button className="notifications"  onClick={handleNotification}>
              <NotificationsIcon className="notifications_icon" />
              <div className="labels4">
                <span className="notification">Notifications </span>
                <span className="notification1">Preferences, notification types</span>
              </div>
              <ChevronRightIcon className="righticon5" />
            </button>
          </div>
          <div className="card9">
            <button className="helps">
              <HelpCenterIcon className="help-icon" />
              <div className="labels5">
                <span className="help">Help </span>
                <span className="help1">Help Centers & supports</span>
              </div>
              <OpenInNewIcon className="open_in_new_icon" />
            </button>
          </div>

          <hr className="gray-hr"/>

          <div className="card10">
            <button className="terms">
              <span className='term'>Terms and services </span>
              <OpenInNewIcon className="open_in_new_icon1" />
            </button>
          </div>
          <div className="card11">
            <button className="privacy">
              <span className='policy'>Privacy Policy </span>
              <OpenInNewIcon className="open_in_new_icon2" />
            </button>
          </div>
          <div className="card12">
            <button className="version">
              <span className='versions'>Version </span>
            </button>
            <span className='versions1'>3.11.17 </span>
          </div>
          
          <div className='card14'>
            <button className='signout' onClick={handleSignOut}>
              <span className='sign'>Sign out </span>
            </button>
          </div>


        </div>

      </div>
    </div>
  );
};

export default Settings;