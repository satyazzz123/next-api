import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div>
        <div className='flex justify-around bg-[rgba(237,239,242,0.72)] py-5 items-center'>
        <Link href={"/"}>  
        <Image width={50} height={50} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8RZr3LqgnCfC5o8wQYRNsV8lhk5IVzld0g&usqp=CAU"}/>
         </Link>
          <div className='flex justify-around gap-6 min-w-[20%]'>
          <Link href={"/"} >Home</Link>
            <Link href={"/"} >Cart</Link>
          </div>
          
           
        </div>
    </div>
  )
}
