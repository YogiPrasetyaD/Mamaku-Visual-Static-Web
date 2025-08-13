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
        "path": "#home"
    },
    {
        "title": "PROJECTS",
        "path": "/projects",
        "hasDropdown": true
    },
    {
        "title": "ABOUT",
        "path": "#about",
    },
    {
        "title": "CONTACT",
        "path": "#contact"
    }
]

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const router = useRouter();

  const handleCategoryChange = (category) => {
    console.log('Selected category:', category);
    setShowProjectDropdown(false); 
    router.push(category.path); 
  }

  const toggleProjectDropdown = () => {
    setShowProjectDropdown(!showProjectDropdown);
  }

  return (
      <nav className='layout-container fixed top-0 left-0 z-10 right-0'>
        <header className='flex justify-between items-center px-10 py-3 bg-white'>
          <div className='flex items-center gap-6 text-[#0e141b]'>
            <Image
              src="/logohitam.png"
              alt="Logo"
              width={20}
              height={24}
              className="cursor-pointer"
            />
            <h2 className='text-body-md-16font-normal text-[#0e141b] leading-tight tracking-[-0.005em]'>MAMAKU</h2>
          </div>
          
          <div className='block md:hidden'>
            {
              !navOpen?(
                <button onClick={() => setNavOpen(true)} className='flex items-center px-2 py-2 text-[#0e141b] border rounded-full border-gray-300 bg-gray-300 hover:bg-slate-200'>
                  <Bars3Icon className='w-5 h-5'/>
                </button>
              )
              :(
                <button onClick={() => setNavOpen(false)} className='flex items-center px-2 py-2 text-[#0e141b] border rounded-full border-gray-300 bg-gray-300 hover:bg-slate-200'>
                  <XMarkIcon className='w-5 h-5'/>
                </button>
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
        <div className='md:hidden'>{navOpen ? <MenuOverlay links={NavLinks} /> : null}</div>
      </nav>
  )
}

export default Navbar