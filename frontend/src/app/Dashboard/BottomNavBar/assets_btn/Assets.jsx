// "use client"; // This marks the component as a client component

// import { useRouter } from 'next/navigation';
// import WalletInterface from '../WalletInterface';
// import BottomNavBar from '../BottomNavBar';


// const Assets = () => {
//   const router = useRouter();

//   return (
//     <div className="bg-white h-screen flex flex-col items-center justify-between p-5">
//       <div className="bg-black w-full max-w-sm p-5 flex flex-col items-center rounded-lg">
//         <h1 className="text-2xl font-bold mb-4 text-white">Assets</h1>
//         <div className="flex-grow flex flex-col justify-center items-center">
//           <h6 className="text-lg text-gray-300 text-center px-4">No Assets found</h6>
//         </div>
//       </div>
//       {/* <WalletInterface /> */}
//       <BottomNavBar />
//     </div>
//   );
// };

// export default Assets;

// 'use client';

// import { useRouter } from 'next/navigation';



// const Assets = () => {
//   const router = useRouter();

//   return (
//     <div>
     
//       <h1>Assets</h1>
//       <p>No Assets found</p>
//       {/* Add your Assets page content here */}
//     </div>
//   );
// };

// export default Assets;


'use client';

import { useRouter } from 'next/navigation';
import styles from './Assets.module.css';

const Assets = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Assets</h1>
      <div className={styles.contentBox}>
        <p className={styles.text}> No Assets found</p>
      </div>
    </div>
  );
};

export default Assets;

// 'use client';

// import { useRouter } from 'next/navigation';

// const Assets = () => {
//   const router = useRouter();

//   return (
//     <div className="bg-white flex flex-col items-center justify-center h-screen p-5 box-border">
//       {/* <div className='flex min-h-full flex-col flex-nowrap items-center gap-4'></div> */}
//       <h1 className="text-2xl text-center mb-5">Assets</h1>
//       <div className="bg-black text-white p-5 rounded-lg w-full max-w-md text-center">
//         <p>No Assets found</p>
//       </div>
//     </div>
//   );
// };

// export default Assets;
