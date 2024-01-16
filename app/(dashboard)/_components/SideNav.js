"use client"

import { useState } from 'react';
import { File, Shield, UploadIcon } from 'lucide-react'
import Image from 'next/image'
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
        <div>
        <Image src='/logo.svg' width={150} height={100}/>
        

        </div>
        <div className='flex flex-col float-left'>
        {menuList.map((item,index)=>(
            <button className={`flex gap-2 p-4 px-0 hover:bg-gray-300 w-full
            ${activeIndex==index?'bg-blue-50 text-primary':null} `}
            onClick={()=>setActiveIndex(index)}>
                
                <item.icon />
                <h2>
                    {item.name}
                </h2>
            </button>
        ))}
        </div>

    </div>
  )
}

export default SideNav