import Image from 'next/image'
import {assets} from '@/assets/assets';
import React from 'react';
import { motion } from "motion/react"

 
const Header = () => {
  return (
    < div className='flex flex-col items-center justify-center gap-4 w-11/12 max-w-3xl text-center mx-auto h-screen '>
      <motion.div
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0.8,type:'spring',stiffness:100}}

      
      >
        <Image src={assets.myProfile} alt='' className=' rounded-full w-32'/>
      </motion.div>

      <motion.h3
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.8,delay:0.4}}
      
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 '>
        Hi! I am Kartikeya pandey <Image src={assets.hand_icon} alt='' className='w-6'/>
      </motion.h3>
      <motion.h1
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.9,delay:0.7}}
      
      className='text-3xl sm:text-6xl lg:text-[66px] '>
        I am a Frontend developer based in India.
      </motion.h1>
      <motion.p 
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.8,delay:0.9}}
      className='max-w-2xl mx-auto'>
        I am a frontend developer from India having knowledge in various frontened skills.
      </motion.p>
      <div className=' flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a
        initial={{y:30,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.8,delay:1}}
         className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent' href="#contact"> contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>
        <motion.a
        initial={{y:30,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.8,delay:1}}

        
        className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black bg-white' href='/my-resume.pdf' download> my resume <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
      </div>
    </div>
  )
}

export default Header
