"use client"

// import FlashSale from '@/components/FlashSale'
// import FirstLook from '@/components/FirstLook'
// import Hero from '@/components/Hero'
// import PRIVApp from '@/components/PRIVApp'
import React from 'react'
// import Featured from '@/components/Featured'
// import GearUp from '@/components/Gearup'
// import DontMiss from '@/components/DontMiss'
// import Essential from '@/components/Essential'
// import CategoryList from '@/components/CategoryList'
import Admin from '@/components/Admin'
import useWebSocket from '@/components/WebSocket'


const page = () => {

  const data = useWebSocket('ws://localhost:8080')
  
  return (
    <div>
      <Admin />
      <h1>Live Updates</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* <PRIVApp />
      <Hero />
      <FirstLook />
      <FlashSale />
      <Featured />
      <GearUp />
      <DontMiss />
      <Essential />
      <CategoryList /> */}
    </div >
  )
}

export default page
