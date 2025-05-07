import React from 'react'
import Hero from './hero'
import Features from './features'
import Ready from './ready'
import StarsBackground from './starsBackground'
import Navbar from './navbar'
import Last from './last'

const Page = () => {
  return (
    <div className='font-clash-display px-32 space-y-10 -mt-20'>
        <StarsBackground imgSrc={'/images/star.svg'} />
        <Navbar />
        <Hero />
        <Features />
        <Ready />
        <Last />
    </div>
  )
}

export default Page