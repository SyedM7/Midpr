import React from 'react'
import { Button } from '../button'
import { RxHamburgerMenu } from "react-icons/rx";

export const NavBar = () => {
  return (
    <div className='flex  p-12  justify-between'>

      <div className='font-medium'>
        Site Name
      </div>

      <div className='sm:hidden'>
       <RxHamburgerMenu size={20}/>
      </div>

      <div className='hidden sm:flex gap-4 '>
        <div>
          <Button variant={'link'} className='text-[16px]'>Page</Button>
        </div>
        <div>
          <Button variant={'link'} className='text-[16px]'>Page</Button>
        </div>
        <div>
          <Button variant={'link'} className='text-[16px]'>Page</Button>
        </div>
        <div className='ml-4'>
          <Button className="text-[16px] border bg-black text-white rounded">Button</Button>
        </div>
        

      </div>

    </div>
  )
}
