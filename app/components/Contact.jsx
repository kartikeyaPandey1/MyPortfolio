"use client";
 import React, { useState } from 'react'
 import { motion } from "motion/react"


const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e31a295e-3883-494a-b0f6-cdd10ed7ed84");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      <motion.h4
      initial={{opacity:0,y:-10}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.3,delay:0.3}}
       className='text-center mb-2 text-lg '>Connect with me</motion.h4>
         <motion.h1
         initial={{opacity:0,y:-10}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.3,delay:0.5}}
          className='text-center text-5xl '>Get in Touch</motion.h1>
         <motion.p
         initial={{opacity:0,y:-10}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.3,delay:0.7}}
          className='text-center mx-auto mt-5 mb-12 max-w-2xl'>I'd love to hear from you! If you have any Questions ,comments,or feedback,please use the form below </motion.p>
    <motion.form
    initial={{opacity:0,y:-10}}
    whileInView={{opacity:1,y:1}}
    transition={{duration:0.3,delay:0.8}}
     onSubmit={onSubmit}  className='max-w-2xl mx-auto'>

        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
            <input name='name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="text" placeholder='Enter your name' required/>
            <input name='email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="email" placeholder='Enter your email'  required />
        </div>
        <textarea name='message' className='w-full p-4 outline-none border-[0.5px] border-gray-300 rounded-mg bg-white mb-6' rows='6' placeholder='Enter your message'  required></textarea>
        <button className='flex items-center justify-between gap-2 py-3 px-8 w-max bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover' type='submit'>
            Submit now

        </button>
        <p className='mt-4'>
            {result}
        </p>
    </motion.form>
    
    </motion.div>
  )
}

export default Contact
