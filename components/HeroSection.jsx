import React from 'react'
import Image from 'next/image'
import ProjectCard from './ProjectCard'

const projects = [
    {
        id: 1,
        imgUrl: "/project.png",
        title: "MUSEUM",
        description: "This is a description of project one."
    },
    {
        id: 2,
        imgUrl: "/project.png",
        title: "CULTURE",
        description: "This is a description of project two."
    },
    {
        id: 3,
        imgUrl: "/project.png",
        title: "INFRASTRUCTURE",
        description: "This is a description of project three."
    }
]

const HeroSection = () => {
  return (
    <div className='flex flex-col px-8 py-52 md:px-15 md:py-56'>
        <div className='flex flex-row items-center'>
            <div className='flex items-center gap-3 md:gap-5'>
                <Image
                    src="/logohitam.png"
                    alt="Hero Image"
                    width={48}
                    height={48}
                    className="md:w-16 md:h-16"
                />
                <h1 className='font-normal text-head-2-48 md:text-head-1-64 text-dev-black'>MAMAKU</h1>
            </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 justify-center text-justify gap-4'>
            <p className='text-body-xs-12 md:text-body-sm-14 text-dev-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate optio voluptate distinctio, illum aliquid aperiam dolores placeat recusandae, sint, obcaecati perferendis in temporibus saepe iusto non! Nesciunt, inventore! Aliquid!</p>
            <p className='text-body-xs-12 md:text-body-sm-14 text-dev-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate optio voluptate distinctio, illum aliquid aperiam dolores placeat recusandae, sint, obcaecati perferendis in temporibus saepe iusto non! Nesciunt, inventore! Aliquid!</p>
        </div>
        <div className='flex flex-row items-center'>
            <ul className='grid grid-cols-2 md:grid-cols-3 gap-3 w-full mt-34 md:mt-38'>
                {
                    projects.map((project) => (
                        <li key={project.id}>
                            <ProjectCard 
                                imgUrl = {project.imgUrl}
                                title={project.title}
                                description = {project.description}
                            /> 
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default HeroSection
