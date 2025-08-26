import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from "motion/react"


const About = (isDarkMode) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}

                className='text-center mb-2 text-lg '>Introduction</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}


                className='text-center text-5xl '>About me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}

                className='flex flex-col lg:flex-row w-full items-center gap-20 my-20'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}

                    className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.myProfile} alt='' className='w-full rounded-3xl' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}

                    className='flex-1'>
                    <p className='text-lg  dark:white'>I’m a pre-final year Electronics and Communication Engineering student at <span className="font-semibold text-indigo-600">SLIET Longowal</span>, with a deep passion for building impactful and user-friendly web applications. I specialize in modern frontend technologies <span className="font-semibold text-indigo-600">React</span> and <span className="font-semibold text-indigo-600">Next.js</span>
                        , and I enjoy designing engaging  <span className="font-semibold text-indigo-600">UI animations and interactive user experiences</span> that bring applications to life.

                        Alongside my frontend skills, I have a strong foundation in <span className="font-semibold text-red-600">Data Structures and Algorithms</span>, having solved <span className="font-semibold text-indigo-600">200+ problems on LeetCode</span> and <span className="font-semibold text-red-600">300+ problems overall</span> across multiple coding platforms. This rigorous practice has sharpened my problem-solving abilities and enhanced my logical thinking, which I apply while developing scalable and efficient applications.

                        I am always eager to learn, explore new technologies, and experiment with innovative ideas. Turning concepts into functional digital experiences excites me, whether it’s building responsive websites, implementing interactive features, or optimizing application performance. My goal is to create software that not only works seamlessly but also provides value and a delightful experience to users.</p>
                        



                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
