import { assets, serviceData, toolsData, techStackData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}

      id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}

        className='text-center mb-2 text-lg '>My Arsenal</motion.h4>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}


        className='text-center text-5xl '>My TechStack</motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.9 }}

        className='text-center mx-auto mt-5 mb-12 max-w-2xl'> Here’s a showcase of the technologies I use to build modern and interactive web applications.</motion.p>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        className='flex flex-col md:flex-row gap-10 my-10'
      >
        {techStackData.map(({ category, techs }, index) => (
          <div key={index} className='flex-1'>
            <h3 className='text-2xl font-semibold text-center mb-6 text-black dark:text-white'>{category}</h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-6'>
              {techs.map(({ icon, title }, idx) => (
                <div key={idx} className='flex flex-col items-center justify-center border border-gray-400 rounded-lg p-6 hover:shadow-black hover:bg-LightHover cursor-pointer hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                  <Image src={icon} alt={title} className='w-12 h-12 mb-4' />
                  <p className='text-gray-800 dark:text-white font-semibold'>{title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
      <h4 className='my-6 text-gray-600 dark:text-white'>Tools i use</h4>

      <ul className='flex items-center gap-4 sm:gap-5'>
        {toolsData.map((tool, index) => (
          <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-500 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' >
            <Image src={tool} alt='Tool' className='w-5 sm:w-7' />

          </li>
        ))}
      </ul>


    </motion.div>
  )
}

export default Services
