import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader() {
  return (
    <div className='flex p-5 border-b item-centerw-full'>
        <AlignJustify className='md:hidden'/>
        <div className='flex md:mx-2 w-full mx-auto px-3 justify-items-center'>
            <Image src='/logo.svg' width={150} height={100}/>
        </div>
        <UserButton />
    </div>
  )
}

export default TopHeader