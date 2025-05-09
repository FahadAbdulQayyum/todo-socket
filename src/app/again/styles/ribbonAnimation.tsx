import { AnvilIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import './styles/ribbon0.css'

const RibbonAnimation = () => {
  return (
    <div className="relative">
      <span className='absolute -top-40 left-0 flex justify-center space-x-4 bg-black p-4 rounded-r-lg z-20 rotate-ribbon'>
        <div className='flex items-center space-x-4'>
          <span className='border border-fiftiary p-2 rounded-full'>
            <AnvilIcon className="text-fiftiary" size={20} />
          </span>
          <span className='text-white ribbon-text'>
            <h2>Achievements</h2>
            <p>Best Finance App On Playstore</p>
          </span>
        </div>
        <span className='w-0.5 bg-white h-[50px] text-5xl text-white rotate-12'></span>
        <div className='flex items-center space-x-4'>
          <span className='border border-fiftiary p-2 rounded-full'>
            <AnvilIcon className="text-fiftiary" size={20} />
          </span>
          <span className='text-white ribbon-text'>
            <h2>Achievements</h2>
            <p>Best Finance App On Playstore</p>
          </span>
        </div>
      </span>

      <div className="ribbon flex justify-center items-center space-x-3 !-top-[60px] !left-[212px] z-10 unfold-ribbon-delayed">
        <span className='border-2 px-4 border-l-black border-r-black py-4'>
          <Image src={"/images/star.svg"} alt="star" height={50} width={50} className='text-4xl' />
        </span>
        <span className='leading-3 space-y-2 ribbon-text'>
          <h2 className='w-full'>Uifry Premium</h2>
          <p className='font-light'>Free Trial</p>
        </span>
      </div>
    </div>
  )
}

export default RibbonAnimation