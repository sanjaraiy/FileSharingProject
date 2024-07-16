'use client'

import React, {useState} from 'react'
import { Upload,Shield,File } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function SideNavbar() {
   
    const menuList = [
        {
            id:1,
            name:'Upload',
            icon:Upload,
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
        }
       
    ]

    const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className='shadow-sm border-r h-full'>
       <div className='p-5 border-b'>
           <Image src='/logo.svg' width={150} height={100}></Image>
       </div>
       <div className='flex flex-col w-full float-left'>
            {menuList.map((item,idx) => (
                <Link href={`${item.path}`} className={`flex gap-2 cursor-pointer p-4 px-6 hover:bg-gray-100 w-full text-gray-500 ${ activeIdx === idx ? 'bg-blue-50 text-primary' : null }`} onClick={() => setActiveIdx(idx)}>
                    <item.icon></item.icon>
                    <h2>{item.name}</h2>
                </Link>
            ))}
       </div>
    </div>
  )
}

export default SideNavbar