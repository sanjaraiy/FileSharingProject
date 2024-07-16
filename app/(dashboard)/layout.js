'use client'

import React, { useState } from 'react'
import SideNavbar from './_components/SideNavbar'
import TopHeader from './_components/TopHeader'

function layout({children}) {
    


  return (
    <div>
       <div className='h-full md:w-64 flex-col fixed inset-y-0 z-50 hidden md:flex'>
         <SideNavbar></SideNavbar>
       </div>
       <div className='md:ml-64'>
         <TopHeader></TopHeader>
         {children}
       </div>
    </div>
  )
}

export default layout