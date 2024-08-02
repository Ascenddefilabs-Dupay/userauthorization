// 'use client';

// import { useRouter } from 'next/navigation';

// const Activity = () => {
//   const router = useRouter();

//   return (
//     <div className="bg-white flex flex-col items-center justify-center h-screen p-5 box-border">
//       <h1 className="text-2xl text-center mb-5">Your Activity</h1>
//       <div className="bg-black text-white p-5 rounded-lg w-full max-w-md text-center">
//         <p>No Activity found</p>
//       </div>
//     </div>
//   );
// };

// export default Activity;



'use client';

import styles from './activity.module.css'; // Adjust the path as needed
import { useRouter } from 'next/navigation';

const Activity = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Your Activity</h1>
      <div className={styles.content}>
        <p>No Activity found</p>
      </div>
    </div>
  );
};

export default Activity;
