"use client"

import React, { useState, useRef, useEffect } from 'react'
import ProjectTag from './ProjectTag'
import ProjectCard from './ProjectCard'
import NavLink from './NavLink'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ChartBarIcon } from '@heroicons/react/24/outline'

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

const ProjectsData = [
    {
        id: 1,
        logo : "/square.png",
        title: "Project One",
        location: "JAKARTA, INDONESIA",
        category: "CULTURE",
        imgUrl: "/project.png",
        tag: ["ALL", "CULTURE", "RESIDENT"],
    },
    {
        id: 2,
        logo : "/square.png",
        title: "Project Two",
        location: "JAKARTA, INDONESIA",
        category: "INTERIOR",
        imgUrl: "/project.png",
        tag: ["ALL", "RESIDENT", "INTERIOR"],
    },
    {
        id: 3,
        logo : "/square.png",
        title: "Project Three",
        location: "JAKARTA, INDONESIA",
        category: "SPACE",
        imgUrl: "/project.png",
        tag: ["ALL", "INFRASTRUCTURE", "SPACE"],
    },
    {
        id: 4,
        logo : "/square.png",
        title: "Project Four",
        location: "JAKARTA, INDONESIA",
        category: "INFRASTRUCTURE",
        imgUrl: "/project.png",
        tag: ["ALL", "RESIDENT", "SPACE"],
    },
    {
        id: 5,
        logo : "/square.png",
        title: "Project Five",
        location: "JAKARTA, INDONESIA",
        category: "CULTURE",
        imgUrl: "/project.png",
        tag: ["ALL", "CULTURE", "INTERIOR"],
    },
    {
        id: 6,
        logo : "/square.png",
        title: "Project Six",
        location: "JAKARTA, INDONESIA",
        category: "INFRASTRUCTURE",
        imgUrl: "/project.png",
        tag: ["ALL", "INFRASTRUCTURE", "CULTURE"],
    }
]

const ProjectSection = () => {
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
            router.push('/projects')
        }else{
            router.push(`/projects?category=${newTag.toLowerCase()}`)
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

    return (
        <section> 
            <div className='fixed left-0 right-0 top-0 z-10 mb-10 md:mb-30'>
                <header className='flex items-center justify-between px-10 py-3 bg-white'>
                    <div className='flex items-center gap-6 text-[#0e141b] '>
                            <Image
                                src="/logohitam.png"
                                alt="Logo"
                                width={20}
                                height={24}
                                className="cursor-pointer"
                            />
                            <h2 className='text-body-sm-14 font-normal text-[#0e141b] leading-tight tracking-[-0.005em]'>MAMAKU</h2>
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
                    <div className='md:hidden'>{navOpen ? <MenuOverlay links={NavLinks} /> : null}</div>
                </header>
                {showProjectDropdown && (
                    <div className='fixed top-14 left-0 right-0 z-5 bg-white'>
                        <div className='flex flex-wrap items-center justify-center gap-10 px-10 py-2'>
                            <ProjectTag name="ALL" onClick={handleTagChange} isSelected={tag === "ALL"} />
                            <ProjectTag name="CULTURE" onClick={handleTagChange} isSelected={tag === "CULTURE"} />
                            <ProjectTag name="RESIDENT" onClick={handleTagChange} isSelected={tag === "RESIDENT"} />
                            <ProjectTag name="INTERIOR" onClick={handleTagChange} isSelected={tag === "INTERIOR"} />
                            <ProjectTag name="INFRASTRUCTURE" onClick={handleTagChange} isSelected={tag === "INFRASTRUCTURE"} />
                            <ProjectTag name="SPACE" onClick={handleTagChange} isSelected={tag === "SPACE"} />
                        </div>
                    </div>
                )}
            </div>
            

            <div className="flex justify-center mt-40">
                <ul
                    ref={ref}
                    className="grid grid-cols-1 justify-items-center gap-8 px-6 md:px-12 lg:px-24 mb-8 mt-12 w-full max-w-6xl"
                >
                    {filteredProjects.map((project, index) => (
                    <li key={index}>
                        <ProjectCard
                        logo={project.logo}
                        title={project.title}
                        category={project.category}
                        location={project.location}
                        imgUrl={project.imgUrl}
                        />
                    </li>
                    ))}
                </ul>
            </div>

        </section>
    )
}

export default ProjectSection
