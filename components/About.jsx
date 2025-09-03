"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='flex flex-col px-8 py-52 md:px-15 md:py-56 gap-2'>
      
      {/* HEADER */}
      <motion.div
        className='flex flex-row items-center'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className='flex items-center gap-3 md:gap-5'>
          <Image
            src="/logohitam.png"
            alt="Hero Image Mamaku Studio"
            width={48}
            height={48}
            className="md:w-16 md:h-16"
          />
          <h1 className='font-normal text-head-2-48 md:text-head-1-64 text-dev-black'>MAMAKU</h1>
        </div>
      </motion.div>

      {/* VISI & MISI */}
      <div className='mt-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

          <motion.div
            className='justify-center text-justify gap-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className='text-body-sm-14 font-bold md:text-body-xl-24 text-dev-black'>VISI</p>
            <p className='text-body-xs-12 md:text-body-sm-14 text-dev-black'>
              Menjadi studio arsitektur terkemuka yang menghadirkan desain bangunan kreatif, modern, dan fungsional. Kami bertujuan menciptakan ruang yang nyaman, estetis, dan berkelanjutan, menggabungkan estetika modern dengan kebutuhan klien serta lingkungan sekitarnya. Setiap karya dirancang untuk memberi pengalaman hidup yang optimal.
            </p>
          </motion.div>

          <motion.div
            className='justify-center text-justify gap-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className='text-body-sm-14 font-bold md:text-body-xl-24 text-dev-black'>MISI</p>
            <p className='text-body-xs-12 md:text-body-sm-14 text-dev-black'>
              Memberikan layanan arsitektur lengkap mulai dari konsultasi desain, visualisasi 3D, hingga supervisi konstruksi. Mengutamakan kualitas, detail, dan integrasi teknologi modern. Setiap proyek dirancang untuk memaksimalkan kenyamanan, efisiensi, dan estetika, sekaligus mendukung keberlanjutan lingkungan dan identitas unik klien.
            </p>
          </motion.div>

        </div>
      </div>

    </div>
  )
}

export default About
