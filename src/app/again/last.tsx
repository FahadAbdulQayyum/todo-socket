import React from 'react';

const Last = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-32'>
      {/* Border with gradient */}
      <div
        className='w-full h-[1px] bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300'
      ></div>
      {/* Copyright text */}
      <p className='mt-10 pb-10'>Copyright 2024 All Rights Reserved</p>
    </div>
  );
};

export default Last;










// import React from 'react'

// const Last = () => {
//   return (
//     <div className='flex flex-col justify-center'>
//         <div className='border w-full'></div>
//         <p className='self-center mt-10'>Copyright 2024 All Rights Reserved</p>
//     </div>
//   )
// }

// export default Last