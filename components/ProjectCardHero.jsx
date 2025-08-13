import React from 'react'
import Image from 'next/image'
import { FolderIcon } from '@heroicons/react/24/outline'

const ProjectCardNavbar = ({ imgUrl, title }) => {
  return (
    <div>
            <Image src= {imgUrl}
                alt="Logo"
                width={427}
                height={24}
                className='flex items-center justify-center aspect-[3/2]'/>
            <div className='flex items-center mt-2'>
                <FolderIcon className='w-4 h-4 text-dev-grey mr-1'
                />
                <h5 className='font-normal text-body-sm-14 md:text-body-xs-12 text-dev-grey truncate'>{title}</h5>
            </div>
        </div>
  )
}

export default ProjectCardNavbar
