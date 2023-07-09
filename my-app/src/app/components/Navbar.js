import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <div className='flex justify-around bg-[rgba(78,133,215,0.72)] py-5'>
        <Link href={"/"}>Logo</Link>
          <div className='flex justify-around gap-6 min-w-[20%]'>
          <Link href={"/"} >Home</Link>
            <Link href={"/"} >Cart</Link>
          </div>
          
           
        </div>
    </div>
  )
}
