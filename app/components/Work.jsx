import { assets, workData } from '@/assets/assets'

import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = (isDarkMode) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
       <motion.h4 
       initial={{opacity:0,y:-20}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.3,delay:0.5}}
       
       className='text-center mb-2 text-lg '>My Portfolio</motion.h4>
         <motion.h1 
         initial={{opacity:0,y:-20}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.3,delay:0.8}}
         

         
         className='text-center text-5xl '>My Latest Work</motion.h1>
         <motion.p
         initial={{opacity:0,y:-20}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.3,delay:1}}
         
         
         className='text-center mx-auto mt-5 mb-12 max-w-2xl'>Welcome to my Web development Portfolio! Explore a collection of web developments projects showcasing my expertise in web development.</motion.p>
         <motion.div
         initial={{opacity:0,y:-10}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.4,delay:1.2}}
         
         className='grid grid-cols-auto gap-5 my-12 dark:text-black'>
            {workData.map((project,index)=>(
                <a href={project.link} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group  ' key={index} style={{backgroundImage:`url(${project.bgImage})`}}>
                    <div className='flex w-10/12 items-center justify-between  bg-white rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-5 group-hover:bottom-7 group  '>
                    <div >
                        <h2>{project.title}</h2>
                        <p>
                            {project.description}
                        </p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] transition group-hover:bg-red-200 '>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                    </div>

                </a>
            ))}
         </motion.div>

         <a className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-LightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover' href=""> 
            Show More <Image src={isDarkMode?assets.right_arrow_bold_dark:assets.right_arrow} alt='' className='w-5'/>
         </a>
    </motion.div>
  )
}

export default Work
