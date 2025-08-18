import About from '@/components/About'
import React from 'react'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div className='flex flex-col relative min-h-screen bg-white overflow-x-hidden font-inter'>
        <Navbar />
        <About />
    </div>
  )
}

export default page
