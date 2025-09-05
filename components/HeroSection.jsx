"use client"

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import ProjectCardHero from './ProjectCardHero'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const projects = [
  { id: 1, imgUrl: "/grafitti/01.jpg", category: "PRIVATE" },
  { id: 2, imgUrl: "/tamanits/1.jpg", category: "PUBLIC" },
  { id: 3, imgUrl: "/chiganoz/chiganoz4.jpg", category: "INTERIOR" },
  { id: 4, imgUrl: "/pelindo/3.jpg", category: "RENDER" },
  { id: 5, imgUrl: "/satuatap/1.png", category: "CONCEPTUALS" }
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const HeroSection = () => {
  const [showMore, setShowMore] = useState(false);
  const router = useRouter()
  const descRef = useRef(null);

  const handleClick = (category) => {
    router.push(`/mamaku-architecture-projects?category=${category.toLowerCase()}`)
  }

  const handleToggle = () => {
    if (showMore) {
      // Scroll halus ke deskripsi atas saat "Read Less"
      descRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setShowMore(!showMore);
  };

  return (
    <div className='flex flex-col px-8 py-40 md:px-15 md:py-38'>
      {/* Logo + Title */}
      <motion.div 
        className='flex flex-row items-end mb-5'
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className='flex gap-3 md:gap-5 items-end' variants={item}>
          <Image
            src="/logohitam.png"
            alt="Hero Image Mamaku Studio"
            width={48}
            height={48}
            className="md:w-16 md:h-16 w-10 h-10 object-contain mb-2"
          />
          <h1 className='font-normal leading-none align-text-bottom text-head-2-48 md:text-head-1-64 text-dev-black'>
            MAMAKU
          </h1>
        </motion.div>
      </motion.div>

      <motion.div className='flex gap-3 md:gap-5 items-end' variants={item}>
        <h1 className='font-[570] leading-none align-text-bottom text-body-sm-14 md:text-body-lg-20 text-dev-black mb-4'>
          Architecture | Studio | 3D Visualization | Else
        </h1>
      </motion.div>

      {/* Deskripsi */}
      <motion.div 
        className='flex flex-col' 
        variants={container} 
        initial="hidden" 
        animate="show"
        ref={descRef}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-justify'>
          {/* Paragraf pertama - selalu tampil */}
          <motion.p className='text-body-xs-12 md:text-body-sm-14 text-dev-black' variants={item}>
            Mamaku Studio adalah portofolio arsitektur dan desain bangunan yang menghadirkan solusi kreatif untuk hunian pribadi, ruang publik, dan interior komersial. Kami menekankan desain modern, fungsional, dan estetika yang harmonis dengan lingkungan sekitar. Setiap proyek dikerjakan dengan pendekatan personal, memperhatikan kebutuhan klien, material berkualitas, pencahayaan alami, serta integrasi ruang indoor dan outdoor untuk kenyamanan maksimal. Portofolio kami mencakup desain rumah minimalis, interior barbershop modern industrial, lobby kantor, ruang publik kampus, dan konsep hunian bersama yang mendukung interaksi sosial. Dengan pengalaman mendalam dalam arsitektur Indonesia, Mamaku Studio memastikan setiap detail proyek, mulai dari fasad, interior, hingga landscape, mencerminkan kualitas, kreativitas, dan estetika tinggi.
          </motion.p>

          {/* Mobile: hanya muncul saat showMore = true */}
          <AnimatePresence>
            {showMore && (
              <motion.p
                key="extra-text-mobile"
                className="text-body-xs-12 text-dev-black mt-2 md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                Tim kami berkomitmen memberikan pelayanan arsitektur lengkap, mulai dari konsultasi desain, visualisasi 3D, hingga pengawasan konstruksi. Kami percaya bahwa desain arsitektur bukan sekadar estetika, tetapi juga menciptakan pengalaman hidup yang nyaman, efisien, dan berkelanjutan. Setiap proyek dirancang dengan memperhatikan aspek cahaya, ventilasi, sirkulasi ruang, dan detail finishing material. Portofolio kami menunjukkan kemampuan dalam merancang ruang multifungsi, memaksimalkan ruang terbatas, dan menghadirkan identitas unik untuk setiap klien. Kami juga mengutamakan integrasi teknologi modern dan konsep berkelanjutan untuk meningkatkan kualitas hidup penghuni, sekaligus menjaga lingkungan sekitar. Melalui pendekatan holistik ini, Mamaku Studio berupaya menciptakan karya arsitektur yang tidak hanya indah, tetapi juga fungsional, nyaman, dan tahan lama.
              </motion.p>
            )}
          </AnimatePresence>

          {/* Medium ke atas: selalu tampil */}
          <motion.p className='text-body-xs-12 md:text-body-sm-14 text-dev-black hidden md:block' variants={item}>
            Tim kami berkomitmen memberikan pelayanan arsitektur lengkap, mulai dari konsultasi desain, visualisasi 3D, hingga pengawasan konstruksi. Kami percaya bahwa desain arsitektur bukan sekadar estetika, tetapi juga menciptakan pengalaman hidup yang nyaman, efisien, dan berkelanjutan. Setiap proyek dirancang dengan memperhatikan aspek cahaya, ventilasi, sirkulasi ruang, dan detail finishing material. Portofolio kami menunjukkan kemampuan dalam merancang ruang multifungsi, memaksimalkan ruang terbatas, dan menghadirkan identitas unik untuk setiap klien. Kami juga mengutamakan integrasi teknologi modern dan konsep berkelanjutan untuk meningkatkan kualitas hidup penghuni, sekaligus menjaga lingkungan sekitar. Melalui pendekatan holistik ini, Mamaku Studio berupaya menciptakan karya arsitektur yang tidak hanya indah, tetapi juga fungsional, nyaman, dan tahan lama.
          </motion.p>
        </div>

        <motion.div className='flex w-full justify-center md:justify-start gap-2 mt-8' variants={item} initial="hidden" animate="show">
          <motion.button 
            onClick={handleToggle} 
            className='btn-white md:hidden w-auto'
          >
            {showMore ? "Read Less" : "Read More"}
          </motion.button>

          <Link href={"/mamaku-architecture-projects"} className='flex-1 md:flex-none'>
            <motion.button className='btn-black w-full md:w-auto'>
              See More Projects
            </motion.button>
          </Link>
        </motion.div>

        {/* Project Cards */}
        <motion.ul 
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 mt-34 md:mt-38'
          variants={container}
        >
          {projects.map((project) => (
            <motion.li
              key={project.id}
              variants={item}
              onClick={() => handleClick(project.category)}
              className='cursor-pointer'
            >
              <ProjectCardHero
                imgUrl={project.imgUrl.toLowerCase()}
                category={project.category}
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  )
}

export default HeroSection
