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
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
  I’m a pre-final year <span className="font-semibold text-red-600">Electronics and Communication Engineering</span> student at{" "}
  <span className="font-semibold text-indigo-600">SLIET Longowal</span>, with a deep passion for building impactful and user-friendly web applications. 
  I specialize in modern frontend technologies{" "}
  <span className="font-semibold text-indigo-600">React</span> and{" "}
  <span className="font-semibold text-indigo-600">Next.js</span>, and I enjoy designing engaging{" "}
  <span className="font-semibold text-indigo-600">UI animations and interactive user experiences</span>{" "}
  that bring applications to life.
</p>

<p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
  Alongside frontend development, I have a strong foundation in{" "}
  <span className="font-semibold text-red-600">Data Structures and Algorithms</span>, having solved{" "}
  <span className="font-semibold text-indigo-600">200+ problems on LeetCode</span> and{" "}
  <span className="font-semibold text-red-600">300+ problems overall</span>{" "}
  across multiple coding platforms. This rigorous practice has sharpened my problem-solving abilities 
  and strengthened my logical thinking, which I apply while building{" "}
  <span className="font-semibold text-indigo-600">scalable and efficient applications</span>.
</p>

<p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
  In addition, I have hands-on experience in{" "}
  <span className="font-semibold text-red-600">Data Analytics</span>, working with{" "}
  <span className="font-semibold text-indigo-600">Python</span>,{" "}
  <span className="font-semibold text-indigo-600">NumPy</span>,{" "}
  <span className="font-semibold text-indigo-600">Pandas</span>, and{" "}
  <span className="font-semibold text-indigo-600">Matplotlib</span>{" "}
  to analyze data, extract insights, and visualize meaningful patterns. I enjoy combining{" "}
  <span className="font-semibold text-indigo-600">data-driven thinking</span> with frontend development 
  to build applications that are both visually engaging and technically sound.
</p>

<p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
  I am always eager to learn, explore new technologies, and experiment with innovative ideas. Turning 
  concepts into functional digital experiences excites me—whether it’s{" "}
  <span className="font-semibold text-indigo-600">building responsive websites</span>,{" "}
  <span className="font-semibold text-indigo-600">implementing interactive features</span>,{" "}
  <span className="font-semibold text-indigo-600">analyzing data</span>, or{" "}
  <span className="font-semibold text-indigo-600">optimizing application performance</span>. 
  My goal is to create software that not only works seamlessly but also delivers real value and a 
  delightful experience to users.
</p>

                        



                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
