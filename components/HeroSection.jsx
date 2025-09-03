"use client"

import React from 'react'
import Image from 'next/image'
import ProjectCardHero from './ProjectCardHero'
import { useRouter } from 'next/navigation'

const projects = [
    {
        id: 1,
        imgUrl: "/grafitti/01.jpg",
        category: "PRIVATE",
    },
    {
        id: 2,
        imgUrl: "/tamanits/1.jpg",
        category: "PUBLIC",
    },
    {
        id: 3,
        imgUrl: "/chiganoz/chiganoz4.jpg",
        category: "INTERIOR",
    },
    {
        id: 4,
        imgUrl: "/pelindo/3.jpg",
        category: "RENDER",
    },
    {
        id: 5,
        imgUrl: "/satuatap/1.png",
        category: "CONCEPTUALS",
    }
]



const HeroSection = () => {
    const router = useRouter();

    const handleClick = (category) => {
        router.push(`/projects?category=${category.toLowerCase()}`);
    }

    return (
        <div className='flex flex-col px-8 py-52 md:px-15 md:py-56'>
            <div className='flex flex-row items-end mb-5'>
                <div className='flex gap-3 md:gap-5 items-end'>
                    <Image
                        src="/logohitam.png"
                        alt="Hero Image Mamaku Studio"
                        width={48}
                        height={48}
                        className="md:w-16 md:h-16 w-10 h-10 object-contain mb-2"
                    />
                    <h1 className='font-normal leading-none align-text-bottom text-head-2-48 md:text-head-1-64 text-dev-black'>MAMAKU</h1>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='grid grid-cols-2 lg:grid-cols-3 justify-center text-justify gap-4'>
                    <p className='text-body-xs-12 md:text-body-sm-14 text-dev-black'>
                        Mamaku Studio adalah portofolio arsitektur dan desain bangunan yang menghadirkan solusi kreatif untuk hunian pribadi, ruang publik, dan interior komersial. Kami menekankan desain modern, fungsional, dan estetika yang harmonis dengan lingkungan sekitar. Setiap proyek dikerjakan dengan pendekatan personal, memperhatikan kebutuhan klien, material berkualitas, pencahayaan alami, serta integrasi ruang indoor dan outdoor untuk kenyamanan maksimal. Portofolio kami mencakup desain rumah minimalis, interior barbershop modern industrial, lobby kantor, ruang publik kampus, dan konsep hunian bersama yang mendukung interaksi sosial. Dengan pengalaman mendalam dalam arsitektur Indonesia, Mamaku Studio memastikan setiap detail proyek, mulai dari fasad, interior, hingga landscape, mencerminkan kualitas, kreativitas, dan estetika tinggi.
                    </p>
                    <p className='text-body-xs-12 md:text-body-sm-14 text-dev-black'>
                        Tim kami berkomitmen memberikan pelayanan arsitektur lengkap, mulai dari konsultasi desain, visualisasi 3D, hingga pengawasan konstruksi. Kami percaya bahwa desain arsitektur bukan sekadar estetika, tetapi juga menciptakan pengalaman hidup yang nyaman, efisien, dan berkelanjutan. Setiap proyek dirancang dengan memperhatikan aspek cahaya, ventilasi, sirkulasi ruang, dan detail finishing material. Portofolio kami menunjukkan kemampuan dalam merancang ruang multifungsi, memaksimalkan ruang terbatas, dan menghadirkan identitas unik untuk setiap klien. Kami juga mengutamakan integrasi teknologi modern dan konsep berkelanjutan untuk meningkatkan kualitas hidup penghuni, sekaligus menjaga lingkungan sekitar. Melalui pendekatan holistik ini, Mamaku Studio berupaya menciptakan karya arsitektur yang tidak hanya indah, tetapi juga fungsional, nyaman, dan tahan lama.
                    </p>
                </div>

                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 mt-34 md:mt-38'>
                    {
                        projects.map((project) => (
                            <li key={project.id}
                            onClick={() => handleClick(project.category)}
                            className='cursor-pointer'>
                                <ProjectCardHero
                                    imgUrl = {project.imgUrl.toLowerCase()}
                                    category={project.category}
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
