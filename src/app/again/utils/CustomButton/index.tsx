import React from 'react'

const CustomButton = ({children}: any) => {
  return (
    <button className="flex items-center space-x-2 bg-black text-white p-4 !font-light rounded-md">
        {children}
        {/* <MoveRight size={15} /> */}
    </button>
  )
}

export default CustomButton