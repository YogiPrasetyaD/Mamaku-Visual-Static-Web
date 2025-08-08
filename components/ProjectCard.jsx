import React from 'react'
import Image from 'next/image'

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div className='border'>
        <Image src= {imgUrl}
            alt="Logo"
            width={427}
            height={24}
            className='flex items-center justify-center'/>
        <div className='flex flex-col'>
            <h5 className='font-semibold text-body-sm-14 md:text-body-xl-24 mt-2 text-dev-black truncate'>{title}</h5>
            <p className='font-normal text-body-xs-12 text-dev-black'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard
