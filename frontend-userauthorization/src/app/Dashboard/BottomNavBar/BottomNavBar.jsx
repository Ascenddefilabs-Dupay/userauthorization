"use client"; // This marks the component as a client component

import { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AppsIcon from '@mui/icons-material/Apps';
import { FiGlobe } from "react-icons/fi";
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter, usePathname } from 'next/navigation'; // Correct import for navigation and pathname in Client Component
import styles from './BottomNavBar.module.css'; // Import the CSS module


const BottomNavBar = () => {
  const [selected, setSelected] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Update selected state based on current route
    if (pathname === '/Dashboard') {
      setSelected('home');
    } else if (pathname === '/Dashboard/BottomNavBar/assets_btn') {
      setSelected('assets');
    } else if (pathname === '/Dashboard/BottomNavBar/apps_btn') {
      setSelected('apps');
    } else if (pathname === '/Dashboard/BottomNavBar/activity_btn') {
      setSelected('activity');
    } 
  }, [pathname]);

  const handleNavigation = (navItem) => {
    setSelected(navItem);
    if (navItem === 'home') {
      router.push('/Dashboard');
    } else if (navItem === 'apps') {
      router.push('/Dashboard/BottomNavBar/transaction_btn');
    } else if (navItem === 'profileicon') {
      router.push('/Dashboard/BottomNavBar/profileicon_btn');
    } else if (navItem === 'browser') {
      router.push('/Dashboard/BottomNavBar/browser_btn')
    }
  };

  return (
    <div className={styles.bottomNavBar}>
      <NavItem
        icon={<HomeIcon />}
        // label="Home"
        isSelected={selected === 'home'}
        onClick={() => handleNavigation('home')}
      />
      {/* <NavItem
        icon={<AssessmentIcon />}
        // label="Assets"
        isSelected={selected === 'assets'}
        onClick={() => handleNavigation('assets')}
      /> */}
      <NavItem
        icon={<FiGlobe style={{ fontSize: '24px' }} />}
        // label="Browser"
        isSelected={selected === 'browser'}
        onClick={() => handleNavigation('browser')}
      />
      <NavItem
        icon={<AssessmentIcon />}
        // label="Apps"
        isSelected={selected === 'apps'}
        onClick={() => handleNavigation('apps')}
      />      
      <NavItem
          icon={<FontAwesomeIcon icon={faUser} style={{ fontSize: '20px' }}/>}
          isSelected={selected === 'profileicon'}
          onClick={() => handleNavigation('profileicon')}
      />
    </div>
  );
};

const NavItem = ({ icon, label, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.navItem} ${isSelected ? styles.selected : ''}`}
    >
      {icon}
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default BottomNavBar;
