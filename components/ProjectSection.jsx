"use client"

import React, { useState, useRef, useEffect } from 'react'
import ProjectTag from './ProjectTag'
import ProjectCard from './ProjectCard'
import ProjectsData from './ProjectsData'
import NavLink from './NavLink'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectMap from './ProjectMap'
import MenuOverlay from './MenuOverlay'

const MapContainer = dynamic(() => import("./ProjectMap"), { ssr: false })

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


const ProjectSection = () => {
    const [isExpanded, setIsExpanded] = useState(null);
    const [isClosed, setIsClosed] = useState(false);
    const cardRefs = useRef([]);
    const[navOpen, setNavOpen] = useState(false);
    const [showProjectDropdown,setShowProjectDropdown] = useState(false);
    const [showSearchInput, setShowSearchInput]= useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const [tag, setTag] = useState("ALL");
    const ref = useRef(null);

    useEffect(() => {
        const categoryFromUrl = searchParams.get('category');
        if(categoryFromUrl) {
            const category = categoryFromUrl.toUpperCase();
            setTag(category);
        }
    }, [searchParams]);


    const handleTagChange = (newTag) => {
        setTag(newTag);

        if(newTag === "ALL"){
            router.push('/mamaku-architecture-projects')
        }else{
            router.push(`/mamaku-architecture-projects?category=${newTag.toLowerCase()}`)
        }
    }

    const filteredProjects = ProjectsData.filter((project) => 
        {   
            const matchesTag = project.tag.includes(tag)
            const matchesSearch = searchQuery === "" || project.title.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesTag && matchesSearch;
        }
    )

    const toggleProjectDropdown = () => {
        setShowProjectDropdown(!showProjectDropdown);
    }

    const toggleSearchInput = () => {
        setShowSearchInput(!showSearchInput);
    }

    const handleToggleExpanded = (index) => {
        setIsExpanded(isExpanded === index ? null : index);
    }

    const [isMobile, setisMobile] = useState(false);

    // useEffect(() => {
    //     if (isExpanded !== null && cardRefs.current[isExpanded]) {
    //         cardRefs.current[isExpanded].scrollIntoView({
    //             behavior: "smooth",
    //             block: "center",
    //         })
    //     }
    // }, [isExpanded]);

    useEffect(() => {
    if (isExpanded !== null && cardRefs.current[isExpanded]) {
        const timeout = setTimeout(() => {
            cardRefs.current[isExpanded]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 550) // sesuai durasi animation
        return () => clearTimeout(timeout)
        }
    }, [isExpanded])

    useEffect(() => {
        const checkMobile = () => { setisMobile(window.innerWidth < 768) };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section> 
            <div className='fixed left-0 right-0 top-0 z-10 mb-10 md:mb-30'>
                <header className='flex items-center justify-between px-10 py-5 bg-white'>
                    <div className='flex items-center gap-6 text-[#0e141b] ' onClick={() => {setNavOpen(!navOpen)}} >
                        {navOpen ? (
                            <XMarkIcon className='w-5 h-5 text-[#0e141b]' />
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
                                        
                                        <motion.h2 className='hidden md:flex text-body-md-16font-normal text-[#0e141b] leading-tight tracking-[-0.005em]'
                                            initial={{ opacity: 1, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1}}
                                            transition={{ delay: 0.75}}>MAMAKU
                                        </motion.h2>
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
                                            <h2 className='md:flex hidden text-body-md-16 font-normal text-[#0e141b] leading-none -mb-0.5'>MAMAKU</h2>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                        
                    
                    <div className='md:flex hidden items-center'>
                        <ul className='flex items-center gap-4 md:gap-4 lg:gap-10'>
                            {NavLinks.map((link, index) => (
                                <li key={index}>
                                    {link.hasDropdown ? (
                                        <button
                                        onClick={toggleProjectDropdown}
                                        className='flex items-center justify-between px-7 py-2.5 text-body-sm-14 text-dev-grey'
                                        >
                                            {link.title}
                                            <Image
                                                src="dropdown.svg"
                                                alt='dropdown'
                                                width={8}
                                                height={8}
                                                className={`ml-3 transition-transform duration-200 ${showProjectDropdown ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                    ) :
                                    (
                                        <div className='px-7 py-2.5 text-body-xs-12'>
                                            <NavLink href={link.path} title={link.title} />
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='relative flex items-center'>
                            
                            <button onClick={toggleSearchInput} className='p-1'>
                                <MagnifyingGlassIcon className='w-5 h-5 items-center justify-center text-dev-grey' />
                            </button>
                            <input 
                                type="search" 
                                name='search' 
                                placeholder='Search...' 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className = {`ml-2 text-gray-500 outline-none focus:border-dev-grey items-center shadow-2xs px-5 py-2 rounded-sm border-dev-grey w-40`} 
                            />
                    </div>
                </header>
                {showProjectDropdown && (
                    <div className='hidden md:block fixed top-14 left-0 right-0 z-20 bg-white'>
                        <div className='flex flex-wrap items-center justify-center gap-10 px-10 py-2'>
                            <ProjectTag name="ALL" onClick={handleTagChange} isSelected={tag === "ALL"} />
                            <ProjectTag name="PRIVATE" onClick={handleTagChange} isSelected={tag === "PRIVATE"} />
                            <ProjectTag name="PUBLIC" onClick={handleTagChange} isSelected={tag === "PUBLIC"} />
                            <ProjectTag name="INTERIOR" onClick={handleTagChange} isSelected={tag === "INTERIOR"} />
                            <ProjectTag name="RENDER" onClick={handleTagChange} isSelected={tag === "RENDER"} />
                            <ProjectTag name="CONCEPTUALS" onClick={handleTagChange} isSelected={tag === "CONCEPTUALS"} />
                        </div>
                    </div>
                )}

                <div className='md:hidden fixed top-14 left-0 right-0 z-20 bg-white'>
                    <div className='flex flex-wrap items-center justify-center gap-2 px-8 py-4'>
                        <ProjectTag name="ALL" onClick={handleTagChange} isSelected={tag === "ALL"} />
                        <ProjectTag name="PRIVATE" onClick={handleTagChange} isSelected={tag === "PRIVATE"} />
                        <ProjectTag name="PUBLIC" onClick={handleTagChange} isSelected={tag === "PUBLIC"} />
                        <ProjectTag name="INTERIOR" onClick={handleTagChange} isSelected={tag === "INTERIOR"} />
                        <ProjectTag name="RENDER" onClick={handleTagChange} isSelected={tag === "RENDER"} />
                        <ProjectTag name="CONCEPTUALS" onClick={handleTagChange} isSelected={tag === "CONCEPTUALS"} />
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center mt-40">
                <ul
                    ref={ref}
                    className="grid grid-cols-1 justify-items-center gap-2 md:gap-6 px-6 md:px-12 lg:px-24 mb-8 mt-12 w-full max-w-6xl"
                >
                    {filteredProjects.map((project, index) => (
                        <li
                            key={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className={`flex flex-col items-center transition-all duration-500 w-full ${
                            isExpanded === index ? "max-w-[720px]" : "max-w-[450px]"
                            } ${isExpanded !== null && isExpanded !== index ? "opacity-30" : "opacity-100"}`}
                        >
                            {/* COVER tetap settingan lama */}
                            <div
                            onClick={() => setIsExpanded(isExpanded === index ? null : index)}
                            className="w-full flex flex-col items-center gap-6 "
                            >
                            <ProjectCard
                                logo={project.logo}
                                title={project.title}
                                category={project.category}
                                location={project.location}
                                imgUrl={project.details[0].image}
                                size={isExpanded === index ? "large" : "small"}
                            />

                            {isExpanded === index && project.details[0].description && (
                                <p className="text-gray-700 justify-center text-sm sm:text-base max-w-[240px] md:max-w-[360px] gap-10 mb-10">
                                {project.details[0].description}
                                </p>
                            )}
                            </div>

                            {/* EXPANDED CONTENT dengan ANIMASI */}
                            <AnimatePresence>
                            {isExpanded === index && (
                                <motion.div
                                key="expanded-content"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="mt-6 w-full flex flex-col gap-6 items-center overflow-hidden"
                                >
                                {/* DETAILS SELANJUTNYA */}
                                {project.details?.slice(1).map((item, i) => (
                                    <div key={i} className="flex flex-col items-center gap-10 mb-10">
                                    {item.image && (
                                        <Image
                                        src={item.image}
                                        alt={`Detail ${i + 2} Image Mamaku Studio`}
                                        width={480}
                                        height={320}                                        
                                        className="w-full max-w-full sm:max-w-[480px] md:max-w-[720px] h-auto object-contain shadow-md"
                                        />
                                    )}
                                    {item.description && (
                                        <p className="text-gray-700 justify-center text-sm sm:text-base max-w-[240px] md:max-w-[360px]">
                                        {item.description}
                                        </p>
                                    )}
                                    </div>
                                ))}

                                {/* MAP */}
                                {project.map && (
                                    <div className="w-full h-[250px] sm:h-[300px] overflow-hidden bg-gray-200 z-0">
                                    <ProjectMap latitude={project.map.lat} longitude={project.map.lng} />
                                    </div>
                                )}
                                </motion.div>
                            )}
                            </AnimatePresence>
                        </li>
                    ))}
                </ul>
            </div>
            {isExpanded !== null && (
                <div className='fixed z-50 bottom-6 left-0 right-0 justify-center flex'>
                    <button onClick={() => {setIsClosed(isExpanded); setIsExpanded(null);}}
                    className=" flex px-3 py-2 bg-dev-black text-dev-white rounded-sm shadow-lg hover:bg-red-600 transition text-body-xs-12"
                    >
                        Close Project
                        <Image
                            src="/close.svg"
                            alt="Close Icon Mamaku Studio"
                            width={12}
                            height={12}
                            className="ml-2 invert"
                        />
                    </button>
                </div>
            )}
            <div className='md:hidden'>{navOpen && <MenuOverlay links={NavLinks} />}</div>
        </section>
    )
}

export default ProjectSection
