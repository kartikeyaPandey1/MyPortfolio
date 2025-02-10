import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from "motion/react"


const About = (isDarkMode) => {
    return (
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
            initial={{opacity:0,y:-20}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.3}}
            
            className='text-center mb-2 text-lg '>Introduction</motion.h4>
            <motion.h2
            initial={{opacity:0,y:-20}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.5}}
            

             className='text-center text-5xl '>About me</motion.h2>

            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8}}
            
            className='flex flex-col lg:flex-row w-full items-center gap-20 my-20'>
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.6,delay:0.4}}
                
                className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.myProfile} alt='' className='w-full rounded-3xl' />
                </motion.div>
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.6,delay:0.8}}
                
                className='flex-1'>
                    <p>I am a frontened developer having experience in many frontened skills and trying to upskill everyday. With a keen eye for design and a love for clean, efficient code, I aim to build seamless digital experiences that not only look great but function flawlessly across all devices.</p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl py-2'>
                        {infoList.map(({icon,title,iconDark,description},index)=>(
                            <li key={index} className='border-[0.5px] border-gray-500 rounded-xl p-6 cursor-pointer hover:bg-LightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' >
                                <Image className='mt-3 w-7' src={ isDarkMode?iconDark:icon} alt={title}/>
                                <h3 className='my-4 text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white'>{description}</p>

                            </li>
                        ))}
                    </ul>
                    <h4 className='my-6 text-gray-600 dark:text-white'>Tools i use</h4>
                    <ul className='flex items-center gap-4 sm:gap-5'>
                        {toolsData.map((tool,index)=>(
                            <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-500 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' >
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>

                            </li>
                        ))}
                    </ul>


                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
