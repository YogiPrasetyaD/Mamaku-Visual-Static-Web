import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col items-center justify-center gap-1 bg-white shadow-l md:hidden'>
        {
            links.map((link, index) => (
                <li key={index} className='hover:text-slate-800 py-4 border-b w-full border-[#e7edf3] border-solid text-body-xs-12 text-dev-grey'>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))
        }
    </ul>
  )
}

export default MenuOverlay
