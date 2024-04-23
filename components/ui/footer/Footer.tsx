import React from 'react'
import { Button } from '../button'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Separator } from '../separator';

export const Footer = () => {
  return (
    <div className='mx-12 mt-20'>
      <Separator className='bg-[#828282]'/>
      <div className='flex flex-col sm:flex-row justify-between items-center'>
      <div className='flex flex-row items-center gap-x-32 sm:flex-col sm:gap-y-20  py-16'>
        <div className='text-2xl font-medium'>Site Name</div>
        <div className='flex gap-4 '>
          <FaFacebook color='#828282'/>
          <FaInstagram color='#828282' />
          <FaLinkedin color='#828282'/>
          <FaYoutube color='#828282'/>
          </div>
        </div>
            <div className='grid grid-cols-3 grid-rows-4 gap-x-24 py-16 mr-20'>
              <Button className='font-bold'>Topic</Button>
              <Button className='font-bold'>Topic</Button>
              <Button className='font-bold'>Topic</Button>
              <Button variant={'link'}>Page</Button>
              <Button variant={'link'}>Page</Button>
              <Button variant={'link'}>Page</Button>
              <Button variant={'link'}>Page</Button>
              <Button variant={'link'}>Page</Button>
              <Button variant={'link'}>Page</Button>
              <Button variant={'link'}>Page</Button>
              <Button variant={'link'}>Page</Button>
              <Button variant={'link'}>Page</Button>


            </div>
        
      </div>
    </div>
   
      
        
      
  )
}
