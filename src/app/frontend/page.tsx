import React from 'react'
import Navbar from '../again/navbar'
import Hero from './hero'
import Features from './features'
import Ready from './ready'

const Frontend = () => {
  return (
    <div className='px-10'>
        <Navbar />
        <Hero />
        <Features />
        <Ready />
    </div>
  )
}

export default Frontend