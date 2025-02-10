import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20 '>
        <div className='text-center '>

            <div className=' flex justify-center gap-4 '>
                <Image src={assets.mail_icon} alt='' className='w-4'/>
                kartikeya191@gmail.com


            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt012 my-6'>
            <p>
                @ 2025 Kartikeya Pandey. ALL RIGHTS RESERVED.
            </p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li>
                    <a target='_blank' href="">Github</a>
                </li>
                <li>
                    <a target='_blank' href="">Linkedin</a>
                </li>
                <li>
                    <a target='_blank' href="">Twitter</a>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Footer
