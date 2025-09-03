import React from 'react'
import ContactUs from '@/components/ContactUs'
import Navbar from '@/components/Navbar'

const page = () => {
    return (
        <div className='flex flex-col relative min-h-screen bg-white overflow-x-hidden font-inter'>
            <Navbar />
            <ContactUs />
        </div>
    )
}

export default page
