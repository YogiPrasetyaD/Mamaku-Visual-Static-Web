"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MenuOverlay from './MenuOverlay'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const NavLinks = [
    {
        "title": "HOME",
        "path": "/"
    },
    {
        "title": "PROJECTS",
        "path": "/mamaku-architecture-projects",
        "hasDropdown": true
    },
    {
        "title": "ABOUT",
        "path": "/about-mamaku-studio",
    },
    {
        "title": "CONTACT",
        "path": "/contact-architecture-mamaku"
    }
]

const Navbar = () => {
  const [isMobile, setisMobile] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => { setisMobile(window.innerWidth < 768) };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
      <nav className='layout-container fixed top-0 left-0 z-10 right-0'>
        <header className='flex justify-between items-center px-10 py-5 bg-white'>
          <div className='flex items-center gap-2 text-[#0e141b] transform transition-transform ease-in-out duration-500' onClick={() => {setNavOpen(!navOpen)}}>
            {
              navOpen ? (
                <XMarkIcon className='w-7 h-7 text-[#0e141b]' />
              ): (
                <div className='flex items-center gap-5'>
                  {isMobile ? (
                    <>
                    
                      <motion.svg width="24" height="24" viewBox="0 0 63 67" fill="none" xmlns="http://www.w3.org/2000/svg"
                        initial={{ opacity: 1, scale: 0 }}
                        animate={{ opacity: 1, scale: 1}}>
                        <motion.rect x="7.5" y="1" width="10" height="65" rx="5" fill="black" stroke="black"
                          animate={{
                            height: [65, 10, 10],
                            width: [10, 10, 65],
                            x: [0, 0, -7.5]
                          }}
                          transition={{ duration: 3, delay: 0.25 }}/>
                        <motion.rect x="26.5" y="23" width="10" height="43" rx="5" fill="black" stroke="black" 
                          animate={{
                            height: [43, 10, 10],
                            width: [10, 10, 65],
                            x: [0, 0, -26.5],
                            y: [0, 4, 4]
                          }}
                          transition={{ duration: 3, delay: 0.75 }}/>
                        <motion.rect x="45.5" y="1" width="10" height="65" rx="5" fill="black" stroke="black"
                          animate={{
                            height: [65, 10, 10],
                            width: [10, 10, 65],
                            x: [0, 0, -45.5],
                            y: [0, 52, 52]
                          }}
                          transition={{ duration: 3, delay: 0.5}}
                        />
                      </motion.svg>
                      
                      <motion.h2 className='text-body-md-16font-normal text-[#0e141b] leading-none tracking-[-0.005em]'
                      initial={{ opacity: 1, scale: 0 }}
                      animate={{ opacity: 1, scale: 1}}
                      transition={{ delay: 0.75}}>MAMAKU</motion.h2>
                    </>
                  ): (
                    <div className='flex flex-row items-end'>
                      <div className='flex gap-3 md:gap-5 items-end'>
                        <Image
                          src="/logohitam.png"
                          alt="Logo Mamaku Studio"
                          width={20}
                          height={24}
                          className="cursor-pointer block"
                        />
                        <h2 className='text-body-md-16 font-normal text-[#0e141b] leading-none -mb-0.5'>MAMAKU</h2>
                      </div>
                    </div>
                  )}

                </div>
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