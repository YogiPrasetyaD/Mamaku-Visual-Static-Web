"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MenuOverlay from './MenuOverlay'
import { useRouter } from 'next/navigation'

const NavLinks = [
    {
        "title": "HOME",
        "path": "/"
    },
    {
        "title": "PROJECTS",
        "path": "/projects",
        "hasDropdown": true
    },
    {
        "title": "ABOUT",
        "path": "/about",
    },
    {
        "title": "CONTACT",
        "path": "/contact"
    }
]

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
      <nav className='layout-container fixed top-0 left-0 z-10 right-0'>
        <header className='flex justify-between items-center px-10 py-5 bg-white'>
          <div className='flex items-center gap-2 text-[#0e141b] transform transition-transform ease-in-out duration-500' onClick={() => {setNavOpen(!navOpen)}}>
            {
              navOpen ? (
                <XMarkIcon className='w-7 h-7 text-[#0e141b]' />
              ): (
                <>
                  <Image
                    src="/logohitam.png"
                    alt="Logo"
                    width={20}
                    height={24}
                    className="cursor-pointer"
                  />
                  <h2 className='text-body-md-16 font-normal text-[#0e141b] leading-tight tracking-[-0.005em]'>MAMAKU</h2>
                </>
              )
            }
          </div>

          
          <div className='hidden md:flex items-center'>
            <ul className='flex items-center gap-4 md:gap-4 lg:gap-10'>
              {NavLinks.map((link, index) => (
                <li key={index}>
                    <div className='px-7 py-2.5 text-body-xs-12'>
                      <NavLink href={link.path} title={link.title} />
                    </div>
                </li>
              ))}
            </ul>
          </div>
        </header>
        <div className='md:hidden'>{navOpen && <MenuOverlay links={NavLinks} />}</div>
      </nav>
  )
}

export default Navbar