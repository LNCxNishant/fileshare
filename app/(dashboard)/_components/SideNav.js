"use client"

import { useState } from 'react';
import { File, Shield, UploadIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
function SideNav() {
    const menuList=[
        {
            id:1,
            name:'Upload',
            icon:UploadIcon,
            path:'/upload'
        },
        {
            id:2,
            name:'Files',
            icon:File,
            path:'/files'
        },
        {
            id:3,
            name:'Upgrade',
            icon:Shield,
            path:'/upgrade'
        },
    ]
const [activeIndex ,setActiveIndex]=useState(0);

  return (
    
    <div className='shadow-sm border-r h-full'>
        <div className='px-2 py-5'>
        <Image src='/logo.svg' className='hidden md:inline' width={150} height={100}/>
        

        </div>
        <div className='flex flex-col float-left px-2 py-3 mx-2'>
        {menuList.map((item,index)=>(
            <Link href={item.path}>
                <button key={index} className={`flex gap-2 p-4 px-0 hover:bg-gray-300 w-full
                    ${activeIndex==index?'bg-blue-50 text-primary':null} `}
                    onClick={()=>setActiveIndex(index)}>
                        <item.icon />
                            <h2>
                                {item.name}
                            </h2>
                    </button>
            </Link>
        ))}
        </div>

    </div>
  )
}

export default SideNav