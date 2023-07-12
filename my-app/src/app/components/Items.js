'use client';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ReactStars from 'react-stars'
export default function Items() {
  const[items,setitems]=useState([])
  const router = useRouter();
    useEffect(()=>{
     try {
      const fectdata=async()=>{
        const res=await axios.get("https://fakestoreapi.com/products")
       
        setitems(res.data)
        // console.log(res.data);
        
    }
  
    fectdata();
     } catch (error) {
      
     }
    },[])
    const onclickonitem=(id)=>{
        const a=window.localStorage.setItem("item_id",id);
        router.push("/modal")

    }
  return (
    <div>
        <div className=''>
     
               {
                items.map((item)=>(
                  <div className='my-20 py-72 lg: lg: h-96 lg:flex justify-around items-center lg:w-100 hover:bg-slate-200 cursor-pointer' id={item.id} key={item.id} onClick={()=>{onclickonitem(item.id)}}  >
                   
                   <div className='mx-[20px]'> <Image width={250} height={250} src={item.image} className=''/></div>
                     <div className=''>
                     <li className='font-bold text-lg lg:font-bold lg:text-3xl my-[20px]'>{item.title}</li>
                      
                      <span className='font-bold text-lg  lg:font-bold lg:text-3xl' >${item.price}</span>


                      <div className='font-bold text-lg  lg:font-bold lg:text-xl'>
                        {item.category}
                      </div>
                      <div>
                      <ReactStars
         count={5}
        edit={false}
          size={24}
        value={item.rating?.rate}
        color2={'#ffd700'} />
                      </div>
                      
                     </div>
                  </div>
                
               
                ))
               }
                 
                
            
     
        </div>
    </div>
  )
}
