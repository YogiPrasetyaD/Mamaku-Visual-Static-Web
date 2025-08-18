import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import AboutCard from './AboutCard'

const AboutData = [
    {
        imgUrl: '/KOSTER.png',
        name: 'KOSTER',
        title: 'FOUNDER',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate optio voluptate distinctio, illum aliquid aperiam dolores placeat recusandae, sint, obcaecati perferendis in temporibus saepe iusto non! Nesciunt, inventore! Aliquid!'
    },
    {
        imgUrl: '/JAYA.png',
        name: 'JAYA NEGARA',
        title: 'FOUNDER',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate optio voluptate distinctio, illum aliquid aperiam dolores placeat recusandae, sint, obcaecati perferendis in temporibus saepe iusto non! Nesciunt, inventore! Aliquid!'
    },
    {
        imgUrl: '/ARI.png',
        name: 'AJAY',
        title: 'FOUNDER',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate optio voluptate distinctio, illum aliquid aperiam dolores placeat recusandae, sint, obcaecati perferendis in temporibus saepe iusto non! Nesciunt, inventore! Aliquid!'
    }
]

const About = () => {
    return (
        <div className='flex flex-col px-8 py-52 md:px-15 md:py-56 gap-2'>
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
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='justify-center text-justify gap-4'>
                                <p className='text-body-sm-14 font-bold md:text-body-xl-24 text-dev-black'>VISI</p>
                                <p className='text-body-xs-12 md:text-body-sm-14 text-dev-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate optio voluptate distinctio, illum aliquid aperiam dolores placeat recusandae, sint, obcaecati perferendis in temporibus saepe iusto non! Nesciunt, inventore! Aliquid!</p>
                    </div>
                    <div className='justify-center text-justify gap-4'>
                                <p className='text-body-sm-14 font-bold md:text-body-xl-24 text-dev-black'>MISI</p>
                                <p className='text-body-xs-12 md:text-body-sm-14 text-dev-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate optio voluptate distinctio, illum aliquid aperiam dolores placeat recusandae, sint, obcaecati perferendis in temporibus saepe iusto non! Nesciunt, inventore! Aliquid!</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center mt-20'>
                    <div className='flex items-center gap-3 md:gap-5'>
                        <Image
                            src="/logohitam.png"
                                alt="Hero Image"
                                width={48}
                                height={48}
                                className="md:w-16 md:h-16"
                        />
                        <h1 className='font-normal text-head-2-48 md:text-head-1-64 text-dev-black'>PEOPLE</h1>
                    </div>
            </div>
            <div>
                <ul className='flex flex-col gap-10 mt-8'>
                    {AboutData.map((item, index) => (
                        <li key={index} >
                            <AboutCard
                                imgUrl={item.imgUrl}
                                name={item.name}
                                title={item.title}
                                description={item.description}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default About
