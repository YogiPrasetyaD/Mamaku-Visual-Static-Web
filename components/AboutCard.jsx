import React from 'react'
import Image from 'next/image'

const AboutCard = ({ imgUrl, name, title, description}) => {
    return (
        <div className='flex flex-col md:flex-row '>
            <div className='flex-1 md:flex'>
                <Image
                    src= {imgUrl}
                    alt="Logo"
                    width={500}
                    height={500}
                    className="md:w-75 md:h-75 aspect-square w-full"
                />
                <div className='flex flex-col ml-0 md:ml-4 mt-4 md:mt-0'>
                    <h1 className='font-bold text-body-md-16 md:text-body-lg-20 text-dev-black'>{name}</h1>
                    <p className='font-light text-body-sm-14 md:text-body-md-16 text-dev-ultralight-grey'>{title}</p>
                    <p className='text-body-sm-14 md:text-body-sm-14 text-dev-grey'>{description}</p>
                </div>
            </div>
        </div>
        
    )
}

export default AboutCard
