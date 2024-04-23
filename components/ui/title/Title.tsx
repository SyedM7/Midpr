import React from 'react'
import Image from 'next/image'
import TitleImage from '../../../assets/images/titleimage.jpg'
import { Button } from '../button'

export const Title = () => {
  return (
    <div>
        <div className='mx-12 absolute opacity-90'>
              <Image
               src={TitleImage}
               alt="TitleImage" 
               className='h-[597px] rounded-xl' 
               style={{objectFit: 'cover' }} />
        </div>

        <div className='flex flex-col gap-8 h-[597px] justify-center items-center relative'>
            <div className='text-4xl sm:text-6xl font-bold text-center text-white '>Shop Title</div>
            <div className='text-lg sm:text-xl px-12 text-center font-medium text-white'>
                Subheading with description of your shopping site
                </div>
            <div>
                <Button className='p-5 bg-black text-white rounded '>Button</Button>
            </div>
        </div>
    </div>
    
    
  )
}

