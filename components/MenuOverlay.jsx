import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({ links }) => {
  return (
    <div className='bg-white shadow-sm rounded-sm border border-gray-200 md:hidden w-[160px] absolute top-15 left-12 mt-1 z-20'>
      <div className='p-1'>
        {links.map((link, index) => (
          <div key={index} className='px-2 py-1.5 rounded hover:bg-gray-50 transition-colors duration-500'>
            <NavLink href={link.path} title={link.title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuOverlay
