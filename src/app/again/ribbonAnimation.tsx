import { AnvilIcon, CupSodaIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const RibbonAnimation = () => {
  return (
    <div className="relative">
    <span className='absolute -top-20 left-0 flex justify-center space-x-4 bg-black p-4 rounded-r-lg -rotate-[30deg] z-20'>
        <div className='flex items-center space-x-4'>
            <span className='border border-fiftiary p-2 rounded-full'><AnvilIcon className="text-fiftiary" size={20}/></span>
            <span className='text-white'>
                <h2>Achievements</h2>
                <p>Best Finance App On Playstore</p>
            </span>
        </div>
        <span className='w-0.5 bg-white h-[50px] text-5xl text-white rotate-12'></span>
        <div className='flex items-center space-x-4'>
            <span className='border border-fiftiary p-2 rounded-full'><AnvilIcon className="text-fiftiary" size={20}/></span>
            <span className='text-white'>
                <h2>Achievements</h2>
                <p>Best Finance App On Playstore</p>
            </span>
        </div>
    </span>
    <span className='absolute -top-[92px] right-[68px] flex justify-center space-x-4 bg-fiftiary px-2 py-7 rounded-r-lg w-[50%] -rotate-[50deg] z-10'>
        <div className='flex items-center space-x-4'>
            <span className='text-black'>
                <p>Best Finance App On Playstore</p>
            </span>
        </div>
    </span>
    <span className='absolute -bottom-[119px] right-[88px] flex justify-center space-x-4 bg-fiftiary px-2 rounded-r-lg w-[40%] -z-10'>
        <div className='flex items-center space-x-4'>
            <span className='flex justify-between items-center space-x-4 text-black'>
                <p><Image src={"/images/star.svg"} alt="star" height={50} width={50} /></p>
                <p className='border border-l-black border-r-black px-2 py-4'><Image src={"/images/star.svg"} alt="star" height={50} width={50} /></p>
                <p>Uifry Premium</p>
            </span>
        </div>
    </span>
</div>
  )
}

export default RibbonAnimation