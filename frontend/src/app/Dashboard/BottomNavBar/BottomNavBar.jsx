// "use client"; // This marks the component as a client component

// import { useEffect, useState } from 'react';
// import HomeIcon from '@mui/icons-material/Home';
// import AssessmentIcon from '@mui/icons-material/Assessment';
// import AppsIcon from '@mui/icons-material/Apps';
// import LocalActivityIcon from '@mui/icons-material/LocalActivity';
// import { useRouter, usePathname } from 'next/navigation'; // Correct import for navigation and pathname in Client Component

// const BottomNavBar = () => {
//   const [selected, setSelected] = useState('');
//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     // Update selected state based on current route
//     if (pathname === '/Dashboard') {
//       setSelected('home');
//     } else if (pathname === '/Dashboard/Assets') {
//       setSelected('assets');
//     } else if (pathname === '/Dashboard/Apps') {
//       setSelected('apps');
//     } else if (pathname === '/Dashboard/Activity') {
//       setSelected('activity');
//     } 
//   }, [pathname]);

//   const handleNavigation = (navItem) => {
//     setSelected(navItem);
//     if (navItem === 'home') {
//       router.push('/Dashboard');
//     } else if (navItem === 'assets') {
//       router.push('/Dashboard/Assets');
//     } else if (navItem === 'apps') {
//       router.push('/Dashboard/Apps');
//     } else if (navItem === 'activity') {
//       router.push('/Dashboard/Activity');
//     } 
//   };

//   return (
//     <div className="fixed bottom-0 w-full flex justify-around items-center h-16 bg-black shadow-md border-t border-gray-200 px-2 md:max-w-md md:left-1/2 md:transform md:-translate-x-1/2">
//       <NavItem
//         icon={<HomeIcon />}
//         label="Home"
//         isSelected={selected === 'home'}
//         onClick={() => handleNavigation('home')}
//       />
//       <NavItem
//         icon={<AssessmentIcon />}
//         label="Assets"
//         isSelected={selected === 'assets'}
//         onClick={() => handleNavigation('assets')}
//       />
//       <NavItem
//         icon={<AppsIcon />}
//         label="Apps"
//         isSelected={selected === 'apps'}
//         onClick={() => handleNavigation('apps')}
//       />
//       <NavItem
//         icon={<LocalActivityIcon />}
//         label="Activity"
//         isSelected={selected === 'activity'}
//         onClick={() => handleNavigation('activity')}
//       />
//     </div>
//   );
// };

// const NavItem = ({ icon, label, isSelected, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`flex flex-col items-center cursor-pointer text-sm  ${isSelected ? 'text-blue-500' : 'text-gray-400'}`}
//       style={{ width: '-20px' }}
//     >
//       {icon}
//       <div className="mt-1 text-xs font-medium">{label}</div>
//     </div>
//   );
// };

// export default BottomNavBar;



"use client"; // This marks the component as a client component

import { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AppsIcon from '@mui/icons-material/Apps';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
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
    } else if (navItem === 'assets') {
      router.push('/Dashboard/BottomNavBar/assets_btn');
    } else if (navItem === 'apps') {
      router.push('/Dashboard/BottomNavBar/apps_btn');
    } else if (navItem === 'activity') {
      router.push('/Dashboard/BottomNavBar/activity_btn');
    } 
  };

  return (
    <div className={styles.bottomNavBar}>
      <NavItem
        icon={<HomeIcon />}
        label="Home"
        isSelected={selected === 'home'}
        onClick={() => handleNavigation('home')}
      />
      <NavItem
        icon={<AssessmentIcon />}
        label="Assets"
        isSelected={selected === 'assets'}
        onClick={() => handleNavigation('assets')}
      />
      <NavItem
        icon={<AppsIcon />}
        label="Apps"
        isSelected={selected === 'apps'}
        onClick={() => handleNavigation('apps')}
      />
      <NavItem
        icon={<LocalActivityIcon />}
        label="Activity"
        isSelected={selected === 'activity'}
        onClick={() => handleNavigation('activity')}
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
