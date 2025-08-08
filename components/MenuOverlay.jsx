import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col bg-white shadow-l md:hidden'>
        {
            links.map((link, index) => (
                <li key={index} className='hover:text-slate-800 py-3 border-t border-b w-full border-[#e7edf3] border-solid text-body-xs-12 text-dev-grey items-center justify-center'>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))
        }
    </ul>
  )
}

export default MenuOverlay
