import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    
    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
         <motion.h4 
         initial={{opacity:0,y:-20}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.4,delay:0.6}}
         
         className='text-center mb-2 text-lg '>What I Offer</motion.h4>
         <motion.h1 
         initial={{opacity:0,y:-20}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.4,delay:0.8}}

         
         className='text-center text-5xl '>My Services</motion.h1>
         <motion.p
         initial={{opacity:0,y:-20}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.4,delay:0.9}}
         
         className='text-center mx-auto mt-5 mb-12 max-w-2xl'>I am Frontened developer based in India and knowledge in various frontened skills and working on expanding that knowledge</motion.p>
         <motion.div 
         initial={{opacity:0,y:-10}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.4,delay:1.2}}
         
         className='grid grid-cols-auto gap-6 my-10'>
            {serviceData.map(({icon,title,description,link},index)=>(
                <div className='border border-gray-400  rounded-lg px-8 py-12 hover:shadow-black hover:bg-LightHover cursor-pointer hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white' key={index}>
                    <Image src={icon} alt='' className='w-10'/>
                    <h3 className='text-lg my-4 text-gray-800 dark:text-white' >{title}</h3>
                    <p className='text-sm text-gray-500 leading-5 dark:text-white'>{description}</p>
                    <a className=' flex items-center gap-2 py-4 mt-5 dark:text-white ' href={link}> Read More <Image src={assets.right_arrow} alt=' ' className='w-4'/></a>

                </div>
            ))}

         </motion.div>
      
    </motion.div>
  )
}

export default Services
