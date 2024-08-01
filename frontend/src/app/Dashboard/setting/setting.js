import React from 'react';
import './Setting.css';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LanguageIcon from '@mui/icons-material/Language';
import LockIcon from '@mui/icons-material/Lock';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ShieldMoonIcon from '@mui/icons-material/ShieldMoon';
import NotificationsIcon from '@mui/icons-material/Notifications';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';



const Settings = () => {
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
                <img src="/images/growth.jpg" className="card-image" />
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
          

          <div className="card4">
            <button className="networks">
              <LanguageIcon className="globe_icon" />
              <div className="labels">
                <span className="network">Networks </span>
                <span className="network1">Edit or add Networks</span>
              </div>
              <ChevronRightIcon className="righticon1" />
            </button>
          </div>
          <div className="card5">
            <button className="securities">
              <LockIcon className="lock_icon" />
              <div className="labels1">
                <span className="security">Security </span>
                <span className="security1">Lock timer,Password</span>
              </div>
              <ChevronRightIcon className="righticon2" />
            </button>
          </div>
          <div className="card6">
            <button className="developers">
              <KeyboardIcon className="keyboard_icon" />
              <div className="labels2">
                <span className="develop">Developer </span>
                <span className="develop1">Testnets,documentation</span>
              </div>
              <ChevronRightIcon className="righticon3" />
            </button>
          </div>
          <div className="card7">
            <button className="displays">
              <ShieldMoonIcon className="shield_moon_icon" />
              <div className="labels3">
                <span className="display">Display </span>
                <span className="display1">Dark mode,currency,balances</span>
              </div>
              <ChevronRightIcon className="righticon4" />
            </button>
          </div>
          <div className="card8">
            <button className="notifications">
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
          <div className='card13'>
            <button className='lock'>
              <span className='locks'>Lock Wallet </span>
            </button>
          </div>
          <div className='card14'>
            <button className='signout'>
              <span className='sign'>Sign out </span>
            </button>
          </div>


        </div>
      
      </div>
    </div>
  );
};

export default Settings;
