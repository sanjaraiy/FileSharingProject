import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Files() {
  return (
    <div>Files
        <UserButton afterSignOutUrl='/'></UserButton>
    </div>
  )
}

export default Files